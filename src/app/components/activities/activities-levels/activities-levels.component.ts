import {Component, Input} from '@angular/core';
import {convertMinutesInHours} from "../../../services/utils/utils";
import {Badge} from "primeng/badge";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-activities-levels',
  standalone: true,
  imports: [
    Badge,
    NgStyle
  ],
  templateUrl: './activities-levels.component.html',
  styleUrl: './activities-levels.component.scss'
})
export class ActivitiesLevelsComponent {
  @Input() rating!: number;
  @Input() difficulty!: string;
  @Input() duration!: number;

  protected readonly convertMinutesInHours = convertMinutesInHours;


}
