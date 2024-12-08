import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

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
  @Input() type!: string;
  @Input({required: true}) icon!: string;
  @Input({required: true}) backgroundColor!: string;
  @Input({required: true}) iconColor!: string;
  @Input({required: true}) iconSize!: string;
  @Output() action: EventEmitter<string> = new EventEmitter();

  doSomething(): void {
    if (this.action) {
      this.action.emit(this.type);
    }
  }

}
