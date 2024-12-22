import {Component, Input} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {ActivityCardComponent} from "../activity-card/activity-card.component";
import {Activity} from "../../../models/activities/activity.class";

@Component({
  selector: 'app-activities-carousel',
  standalone: true,
  imports: [
    CarouselModule,
    ActivityCardComponent
  ],
  templateUrl: './activities-carousel.component.html',
  styleUrl: './activities-carousel.component.scss'
})
export class ActivitiesCarouselComponent {
  @Input() activities!: Activity[]
}
