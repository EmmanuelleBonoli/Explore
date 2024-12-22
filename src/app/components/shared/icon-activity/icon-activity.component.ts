import {Component, Input} from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";
import {ActivityType, AllActivitiesTypes, IconActivity} from "../../../models/activities/all-activities.types";

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
  filtersAvailables: IconActivity[] = AllActivitiesTypes;

  @Input() activityTypes!: string[]; // pourquoi pas ActivityType[] ?

  icon!: IconActivity;

}
