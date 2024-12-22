import {Component, inject, OnInit} from '@angular/core';
import {ActivityCardComponent} from '../../components/activities/activity-card/activity-card.component';
import {Activity} from '../../models/activities/activity.class';
import {DataActivitiesService} from '../../services/activities/data-activities.service';
import {ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FooterComponent} from '../../components/shared/footer/footer.component';
import {ImageModule} from "primeng/image";
import {GlobalFiltersComponent} from "../../components/activities/global-filters/global-filters.component";
import {Scroller} from 'primeng/scroller';
import {ScrollerModule} from 'primeng/scroller';
import {Skeleton} from 'primeng/skeleton';
import {NgClass} from "@angular/common";
import {
  ActivitiesCarouselComponent
} from "../../components/activities/activities-carousel/activities-carousel.component";
import {
  ActivitiesScrollerComponent
} from "../../components/activities/activities-scroller/activities-scroller.component";
import {MenuComponent} from "../../components/activities/menu/menu.component";

@Component({
  selector: 'app-display-activities-page',
  standalone: true,
  imports: [
    ActivityCardComponent,
    ButtonModule,
    TagModule,
    FooterComponent,
    ScrollPanelModule,
    ImageModule,
    GlobalFiltersComponent,
    Scroller,
    Skeleton,
    NgClass,
    ScrollerModule,
    ActivitiesCarouselComponent,
    ActivitiesScrollerComponent,
    MenuComponent
  ],
  templateUrl: './display-activities-page.component.html',
  styleUrl: './display-activities-page.component.scss',
})
export class DisplayActivitiesPageComponent implements OnInit {
  dataActivitiesService: DataActivitiesService = inject(DataActivitiesService);

  activities: Activity[] = [];
  isVisibleSearchInputs: boolean = false;

  ngOnInit(): void {
    // todo: à remplacer par : this.activitiesFacadeService.getAllActivitiesCategories({location: '', types: defaultFilters});
    this.activities = this.dataActivitiesService.getDataActivities();
  }

  showSearchInputs(): void {
    this.isVisibleSearchInputs = !this.isVisibleSearchInputs;
  }


}
