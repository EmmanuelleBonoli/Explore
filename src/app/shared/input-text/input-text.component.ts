import {Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, NgModel} from '@angular/forms';
import {InputErrorComponent} from '../input-error/input-error.component';
import {InputValueControls} from '../../models/shared/input-value-controls';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, InputErrorComponent, PasswordModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent implements OnDestroy {
  @Input() inputControls!: InputValueControls;
  @Input() isFormSubmitted!: boolean;
  @Input() autocomplete!: boolean;

  @ViewChild('refInput') refInput!: NgModel;

  private inputSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor() {
    this.inputSubject
      .pipe(
        debounceTime(500), // délai de 500ms avant d'émettre la valeur
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        const inputIsValid = this.refInput.valid;

        this.inputControls.isValid = inputIsValid ? true : false;

        if (inputIsValid && this.inputControls.controls.check) {
          const checkResult = this.inputControls.controls.check();

          if (checkResult instanceof Promise) {
            checkResult
              .then((isValid) => {
                this.inputControls.isValid = isValid;
                this.inputControls.helperText = isValid
                  ? ''
                  : `${this.inputControls.value} est déjà utilisé.`;
              })
              .catch((err) => {
                console.error('Erreur lors de la vérification', err);
              });
          } else {
            const isValid = checkResult;
            this.inputControls.isValid = isValid;
            this.inputControls.helperText = isValid
              ? ''
              : 'Les 2 mots de passe doivent être égaux.';
          }
        }
      });
  }

  onInputChange(): void {
    this.inputSubject.next('test');
  }

  // Indispensable: compléter les Subjects pour éviter les fuites de mémoire
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.inputSubject.complete();
  }
}
