import {Component, OnInit, inject} from '@angular/core';
import {SpeedDialModule} from 'primeng/speeddial';
import {NgStyle, NgClass} from '@angular/common';
import {MessageService, MenuItem} from "primeng/api";
import {AllActivitiesTypes, Activity} from "../../../models/activities/all-activities.types";
import {ActivityTypeComponent} from "../../shared/activity-type/activity-type.component";

@Component({
  selector: 'app-global-filter',
  standalone: true,
  imports: [SpeedDialModule, NgStyle, NgClass, ActivityTypeComponent],
  templateUrl: './global-filter.component.html',
  styleUrl: './global-filter.component.scss'
})
export class GlobalFilterComponent implements OnInit {

  messageService: MessageService = inject(MessageService);

  filtersAvailables: Activity[] = AllActivitiesTypes;
  itemsFilters!: MenuItem[];

  ngOnInit() {
    this.itemsFilters = this.filtersAvailables.map((filter: Activity) => ({
      ...filter,
      command: () => {
        alert('It works!');
      },
      tooltipOptions: {
        tooltipLabel: 'Add'
      },
    }));
  }

}
