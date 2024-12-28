import {Component} from '@angular/core';
import {MapComponent} from "../../components/shared/map/map.component";
import {ActivityInfosComponent} from "../../components/activity/activity-infos/activity-infos.component";
import {ActivityCommentsComponent} from "../../components/activity/activity-comments/activity-comments.component";

@Component({
  selector: 'app-details-activity-page',
  standalone: true,
  imports: [
    MapComponent,
    ActivityInfosComponent,
    ActivityCommentsComponent
  ],
  templateUrl: './details-activity-page.component.html',
  styleUrl: './details-activity-page.component.scss'
})
export class DetailsActivityPageComponent {

}
