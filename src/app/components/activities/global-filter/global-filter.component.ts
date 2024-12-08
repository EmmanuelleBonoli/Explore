import {Component, OnInit, inject} from '@angular/core';
import {SpeedDialModule} from 'primeng/speeddial';
import {NgStyle, NgClass} from '@angular/common';
import {MenuItem} from "primeng/api";
import {ActivitiesFacadeService} from "../../../services/activities/activities-facade.service";
import {AllActivitiesTypes, Activity} from "../../../models/activities/all-activities.types";
import {IconActivityComponent} from "../../shared/icon-activity/icon-activity.component";

@Component({
  selector: 'app-global-filter',
  standalone: true,
  imports: [SpeedDialModule, NgStyle, NgClass, IconActivityComponent],
  templateUrl: './global-filter.component.html',
  styleUrl: './global-filter.component.scss'
})
export class GlobalFilterComponent implements OnInit {

  activitiesFacadeService: ActivitiesFacadeService = inject(ActivitiesFacadeService);

  filtersAvailables: Activity[] = AllActivitiesTypes;
  itemsFilters!: MenuItem[];

  ngOnInit() {
    this.itemsFilters = this.filtersAvailables.map((filter: Activity) => ({
      ...filter,
    }));
  }

  applyFilter(filterActivity: string): void {
    if (filterActivity) {
      this.activitiesFacadeService.getAllActivitiesCategories(filterActivity)
    }
  }
}
