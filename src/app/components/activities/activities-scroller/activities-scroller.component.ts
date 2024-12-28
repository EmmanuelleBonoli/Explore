import {Component, ViewChild, Input, inject} from '@angular/core';
import {Scroller} from "primeng/scroller";
import {Activity} from "../../../models/activities/activity.class";
import {IconActivityComponent} from "../../shared/icon-activity/icon-activity.component";
import {LazyLoadEvent} from "primeng/api";
import {DataActivitiesService} from "../../../services/activities/data-activities.service";
import {Skeleton} from "primeng/skeleton";
import {ButtonModule} from 'primeng/button';
import {NgStyle} from "@angular/common";
import {Router} from "@angular/router";
import {ActivityCardComponent} from "../activity-card/activity-card.component";
import {ActivitiesLevelsComponent} from "../activities-levels/activities-levels.component";

@Component({
  selector: 'app-activities-scroller',
  standalone: true,
  imports: [
    Scroller,
    IconActivityComponent,
    Skeleton,
    ButtonModule,
    NgStyle,
    ActivityCardComponent,
    ActivitiesLevelsComponent
  ],
  templateUrl: './activities-scroller.component.html',
  styleUrl: './activities-scroller.component.scss'
})
export class ActivitiesScrollerComponent {
  dataActivitiesServices: DataActivitiesService = inject(DataActivitiesService);
  router: Router = inject(Router);
  @ViewChild('sc') sc!: Scroller;
  @Input() activities!: Activity[];
  // activities: Activity[] = [];
  @Input() orientation!: "horizontal" | "vertical";

  lazyLoading: boolean = true;
  loadLazyTimeout: any;

  // ngOnInit(): void {
  //   this.activities = Array.from({length: 20})
  //     .map(() => this.dataActivitiesServices.getDataActivities())
  //     .flat();
  // }

  seeDetails(activityId: string): void {
    this.router.navigate([`activity/${activityId}`]);
  }

  resetScroll() {
    this.sc.scrollToIndex(0, 'smooth');
  }

  onLazyLoad(event: LazyLoadEvent): void {
    this.lazyLoading = true;

    if (this.loadLazyTimeout) {
      clearTimeout(this.loadLazyTimeout);
    }

    // todo: empecher le double lancement au départ du lazy loading au chargement
    // todo: pourquoi le lazy loading se charge sans arret sans être arrivé au bout de la liste ???
    this.loadLazyTimeout = setTimeout(() => {
      // const {first, last} = event;
      // Récupère les données correspondantes au chunk
      //   const newData = this.dataActivitiesServices.getDataActivitiesChunk(first, rows);
      //
      //   // Remplace les valeurs null par les nouvelles données
      //   for (let i = first; i < first + newData.length; i++) {
      //     this.activities[i] = newData[i - first];
      //   }
      //
      //   this.lazyLoading = false;
      // }, Math.random() * 1000 + 250);
      // this.activities = this.dataActivitiesServices.getDataActivities2()
      this.lazyLoading = false;
    }, Math.random() * 1000 + 250);
    console.log("activities in lazyloading :", this.activities)
  }
}
