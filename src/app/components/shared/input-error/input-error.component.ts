import {Component, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import {NgModel} from '@angular/forms';
import {InputValueControls} from '../../../models/shared/input-value-controls';

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './input-error.component.html',
  styleUrl: './input-error.component.scss',
})
export class InputErrorComponent {
  @Input() refInput!: NgModel;
  @Input() inputControls!: InputValueControls;
}
