import {Component, Input, ViewChild} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ControlContainer, FormsModule, NgForm, NgModel} from '@angular/forms';
import {InputErrorComponent} from '../input-error/input-error.component';
import {InputValueControls} from '../../../models/shared/input-value-controls';
import {firstValueFrom} from 'rxjs';
import {Observable, isObservable} from 'rxjs';
import {AsyncPipe} from "@angular/common";
import {PasswordModule} from "primeng/password";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [AsyncPipe, InputTextModule, FormsModule, InputErrorComponent, PasswordModule],
  // viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() inputControls!: InputValueControls;
  @Input() autocomplete!: boolean;

  @ViewChild('refInput') refInput!: NgModel;

  private INPUT_DELAY: number = 500;
  private debounceTimer?: ReturnType<typeof setTimeout>;

  /*
  * Vérifie que l'input répond à ses règles de format,
  * Si c'est le cas, vérifie l'existance de la fonction personnalisée et la lance
  * Gère la validation finale de l'input.
  */
  validateInput(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      const inputIsValid = this.refInput.valid;

      if (!inputIsValid) {
        this.inputControls.isValid = false;
        return
      }

      if (inputIsValid && this.inputControls.controls.check) {
        const checkResult: boolean | Observable<boolean> = this.inputControls.controls.check();

        const checkSuccess = isObservable(checkResult)
          ? firstValueFrom(checkResult)
          : checkResult;

        if (checkSuccess) {
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
    }, this.INPUT_DELAY)
  }
}
