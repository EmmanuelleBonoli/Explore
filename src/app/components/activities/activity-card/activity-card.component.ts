import {Component, Input} from '@angular/core';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';
import {ImageModule} from 'primeng/image';
import {Activity} from '../../../models/activities/activity.class';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-activity-card',
  standalone: true,
  imports: [CardModule, ButtonModule, ImageModule, TagModule, NgStyle],
  templateUrl: './activity-card.component.html',
  styleUrl: './activity-card.component.scss',
})
export class ActivityCardComponent {
  @Input() activity!: Activity;
}
