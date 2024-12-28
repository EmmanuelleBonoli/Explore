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
import {SelectButton} from "primeng/selectbutton";
import {FormsModule} from "@angular/forms";
import {MapComponent} from "../../components/shared/map/map.component";
import {ActivitiesSearch, defaultFilters} from "../../models/activities/activities-search.types";

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
    MenuComponent,
    SelectButton,
    FormsModule,
    MapComponent
  ],
  templateUrl: './display-activities-page.component.html',
  styleUrl: './display-activities-page.component.scss',
})
export class DisplayActivitiesPageComponent implements OnInit {
  dataActivitiesService: DataActivitiesService = inject(DataActivitiesService);

  activities: Activity[] = [];
  isVisibleSearchInputs: boolean = false;

  choiceDisplayActivities: string = 'list';
  displayActivitiesOptions: any[] = [
    {icon: 'pi pi-list', option: 'list'},
    {icon: 'pi pi-map', option: 'map'},
  ];

  searchUser: ActivitiesSearch = {
    localisation: '',
    types: defaultFilters
  };

  ngOnInit(): void {
    // todo: à remplacer par : this.activitiesFacadeService.getAllActivitiesCategories({location: '', types: defaultFilters});
    this.activities = this.dataActivitiesService.getDataActivities();
  }

  showSearchInputs(): void {
    this.isVisibleSearchInputs = !this.isVisibleSearchInputs;
  }


}
