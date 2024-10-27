import { Component, Input, Output, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { InputValueStatus } from '../../models/input-value-status';
import { InputErrorComponent } from '../input-error/input-error.component';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [InputTextModule, FormsModule, InputErrorComponent],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.scss',
})
export class InputTextComponent {
  @Input() placeholder!: string;
  @Input() label!: string;
  @Input() helperText!: string;

  value: string = '';
  @ViewChild('refInput') refInput!: NgModel;

  @Output() emitRefInput: EventEmitter<InputValueStatus> =
    new EventEmitter<InputValueStatus>();

  sendInput(): void {
    console.log('refInput', this.refInput);
    const returnValue: InputValueStatus = {
      label: this.label,
      value: this.value,
      isValid: this.refInput.valid,
    };
    this.emitRefInput.emit(returnValue);
  }
}
