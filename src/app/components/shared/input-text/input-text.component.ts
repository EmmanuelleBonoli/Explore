import {Component, Input, OnDestroy, ViewChild} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ControlContainer, FormsModule, NgForm, NgModel} from '@angular/forms';
import {InputErrorComponent} from '../input-error/input-error.component';
import {InputValueControls} from '../../../models/shared/input-value-controls';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, InputErrorComponent, PasswordModule],
  // viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent implements OnDestroy {
  @Input() inputControls!: InputValueControls;
  @Input() autocomplete!: boolean;

  @ViewChild('refInput') refInput!: NgModel;

  private inputSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor() {
    this.inputSubject
      .pipe(
        debounceTime(500),
        takeUntil(this.destroy$)
      )
      .subscribe(async () => {
        await this.validateInput();
      });
  }

  /*
  * Vérifie que l'input répond à ses règles de format,
  * Si c'est le cas, vérifie l'existance de la fonction personnalisée et la lance
  * Gère la validation finale de l'input.
  */
  private async validateInput(): Promise<void> {
    const inputIsValid = this.refInput.valid;

    if (inputIsValid && this.inputControls.controls.check) {
      const checkResult = await this.inputControls.controls.check();
      if (checkResult) {
        this.inputControls.isValid = inputIsValid;
        this.inputControls.controls.isCheckReturn = false;
      } else {
        this.inputControls.isValid = false;
        this.inputControls.controls.isCheckReturn = true;
      }
    }
    if (inputIsValid && !this.inputControls.controls.check) {
      this.inputControls.isValid = inputIsValid;
    }
    if (!inputIsValid) {
      this.inputControls.isValid = false;
    }
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
