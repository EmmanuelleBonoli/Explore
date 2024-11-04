import { Component, Input, Output, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { InputValueStatus } from '../../models/input-value-status';
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

  // @Output() emitRefInput: EventEmitter<InputValueStatus> =
  //   new EventEmitter<InputValueStatus>();

  onInputChange(): void {
    // Vérifie si refInput est défini avant d'y accéder
    if (this.refInput) {
      this.inputControls.isValid = this.refInput.valid ? true : false;

      // // Émet l'événement si nécessaire
      // const returnValue: InputValueStatus = {
      //   label: this.inputControls.label,
      //   isValid: this.inputControls.isValid,
      // };
      // this.emitRefInput.emit(returnValue);
    }
  }
}
