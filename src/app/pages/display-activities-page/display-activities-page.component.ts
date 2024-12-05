import {Component, inject, OnInit} from '@angular/core';
import {ActivityCardComponent} from '../../components/activities/activity-card/activity-card.component';
import {Activity} from '../../models/activities/activity.class';
import {DataActivitiesService} from '../../services/activities/data-activities.service';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {TagModule} from 'primeng/tag';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {FooterComponent} from '../../components/shared/footer/footer.component';
import {ImageModule} from "primeng/image";
import {ActivityTypeComponent} from "../../components/shared/activity-type/activity-type.component";
import {GlobalFilterComponent} from "../../components/activities/global-filter/global-filter.component";

@Component({
  selector: 'app-display-activities-page',
  standalone: true,
  imports: [
    ActivityCardComponent,
    CardModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    FooterComponent,
    ScrollPanelModule,
    ImageModule,
    ActivityTypeComponent,
    GlobalFilterComponent
  ],
  templateUrl: './display-activities-page.component.html',
  styleUrl: './display-activities-page.component.scss',
})
export class DisplayActivitiesPageComponent implements OnInit {
  activities: Activity[] = [];
  dataActivitiesService: DataActivitiesService = inject(DataActivitiesService);

  // responsiveOptions: any[] | undefined;

  ngOnInit(): void {
    this.activities = this.dataActivitiesService.getDataActivities();

    //   this.responsiveOptions = [
    //     {
    //       breakpoint: '1400px',
    //       numVisible: 3,
    //       numScroll: 3
    //     },
    //     {
    //       breakpoint: '1220px',
    //       numVisible: 2,
    //       numScroll: 2
    //     },
    //     {
    //       breakpoint: '1100px',
    //       numVisible: 3,
    //       numScroll: 1
    //     }
    //   ];
  }

  // getSeverity(status: string): string | undefined {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warning';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }

}
