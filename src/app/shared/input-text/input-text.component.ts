import { Component, Input, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { InputErrorComponent } from '../input-error/input-error.component';
import { InputValueControls } from '../../models/input-value-controls';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, InputErrorComponent],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() inputControls!: InputValueControls;
  @Input() isFormSubmitted!: boolean;

  @ViewChild('refInput') refInput!: NgModel;

  onInputChange(): void {
    const inputIsValid = this.refInput.valid;

    this.inputControls.isValid = inputIsValid ? true : false;

    if (inputIsValid && this.inputControls.controls.check) {
      const checkResult = this.inputControls.controls.check();

      if (checkResult instanceof Promise) {
        checkResult
          .then((isValid) => {
            // Mettre à jour isValid et helperText en fonction du résultat
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
  }
}
