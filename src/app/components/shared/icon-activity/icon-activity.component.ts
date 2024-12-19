import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {IconActivity} from "../../../models/activities/all-activities.types";

@Component({
  selector: 'app-icon-activity',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './icon-activity.component.html',
  styleUrl: './icon-activity.component.scss'
})
export class IconActivityComponent {
  @Input() icon!: IconActivity;
  @Output() action: EventEmitter<string> = new EventEmitter();

  doSomething(): void {
    if (this.action) {
      this.action.emit(this.icon.type);
    }
  }

}
