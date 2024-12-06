import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-activity-type',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './activity-type.component.html',
  styleUrl: './activity-type.component.scss'
})
export class ActivityTypeComponent {
  @Input() icon!: string;
  @Input() backgroundColor!: string;
  @Input() iconColor!: string;
  @Input() size!: string;
}
