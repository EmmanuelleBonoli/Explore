import {Component, OnInit, inject} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from '@angular/router';
import {Activity} from "../../../models/activities/activity.class";
import {ActivitiesFacadeService} from "../../../services/activities/activities-facade.service";
import {DataActivitiesService} from "../../../services/activities/data-activities.service";

@Component({
  selector: 'app-activity-infos',
  standalone: true,
  imports: [],
  templateUrl: './activity-infos.component.html',
  styleUrl: './activity-infos.component.scss'
})
export class ActivityInfosComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);
  // activitiesFacadeService: ActivitiesFacadeService = inject(ActivitiesFacadeService);
  dataActivitiesService: DataActivitiesService = inject(DataActivitiesService);

  // activity$!: Observable<Activity>;
  activity$!: Activity;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const activityId = params.get('id');

      if (activityId) {
        // todo: à décommenter dès que le back end sera prêt
        // this.activity$ = this.activitiesFacadeService.getActivityById(activityId);

        // todo: à supprimer dès que le back end sera prêt
        this.activity$ = this.dataActivitiesService.getActivityById(activityId)
      }

    });
    console.log(this.activity$);
  }
}
