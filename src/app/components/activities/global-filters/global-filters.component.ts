import {Component, inject} from '@angular/core';
import {NgStyle, NgClass} from '@angular/common';
import {ActivitiesFacadeService} from "../../../services/activities/activities-facade.service";
import {AllActivitiesTypes, IconActivity} from "../../../models/activities/all-activities.types";
import {SelectButton} from 'primeng/selectbutton';
import {InputGroup} from 'primeng/inputgroup';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import {InputTextModule} from 'primeng/inputtext';
import {ActivitiesSearch, defaultFilters} from "../../../models/activities/activities-search.types";
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-global-filter',
  standalone: true,
  imports: [NgStyle, NgClass, FormsModule, SelectButton, InputTextModule, InputGroup, InputGroupAddonModule],
  templateUrl: './global-filters.component.html',
  styleUrl: './global-filters.component.scss'
})
export class GlobalFiltersComponent {

  activitiesFacadeService: ActivitiesFacadeService = inject(ActivitiesFacadeService);

  itemsFilters: IconActivity[] = AllActivitiesTypes;
  searchUser: ActivitiesSearch = {
    localisation: '',
    types: defaultFilters
  };

  private debounceTimer?: ReturnType<typeof setTimeout>;

  applySearch(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }
    this.debounceTimer = setTimeout(() => {
      this.activitiesFacadeService.getAllActivitiesCategories(this.searchUser)
    }, 2000)
  }
}
