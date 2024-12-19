import {Component, OnInit, inject} from '@angular/core';
import {NgStyle, NgClass} from '@angular/common';
import {MenuItem} from "primeng/api";
import {ActivitiesFacadeService} from "../../../services/activities/activities-facade.service";
import {AllActivitiesTypes, IconActivity} from "../../../models/activities/all-activities.types";
import {SelectButton} from 'primeng/selectbutton';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputTextModule} from 'primeng/inputtext';
import {ActivitiesSearch} from "../../../models/activities/activities-search.types";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-global-filter',
  standalone: true,
  imports: [NgStyle, NgClass, FormsModule, SelectButton, InputTextModule, InputGroup, InputGroupAddonModule],
  templateUrl: './global-filters.component.html',
  styleUrl: './global-filters.component.scss'
})
export class GlobalFiltersComponent implements OnInit {

  activitiesFacadeService: ActivitiesFacadeService = inject(ActivitiesFacadeService);

  filtersAvailables: IconActivity[] = AllActivitiesTypes;
  itemsFilters!: MenuItem[];
  searchUser: ActivitiesSearch = {
    localisation: '',
    isDogFriendly: true,
    isRestaurant: true,
    isRide: true,
    isRun: true,
    isWalk: true
  };

  ngOnInit() {
    this.itemsFilters = this.filtersAvailables.map((filter: IconActivity) => ({
      ...filter,
    }));
    console.log(this.itemsFilters);
  }

  applyFilters(filtersActivity: string): void {
    if (filtersActivity) {
      this.activitiesFacadeService.getAllActivitiesCategories(filtersActivity)
    }
  }
}
