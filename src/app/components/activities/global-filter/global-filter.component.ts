import {Component, OnInit} from '@angular/core';
import {SpeedDialModule} from 'primeng/speeddial';
import {MessageService, MenuItem} from "primeng/api";
import {AllActivityTypes} from "../../../models/activities/all-activity-types";

@Component({
  selector: 'app-global-filter',
  standalone: true,
  imports: [SpeedDialModule],
  templateUrl: './global-filter.component.html',
  styleUrl: './global-filter.component.scss'
})
export class GlobalFilterComponent implements OnInit {

  itemsFilters!: MenuItem[];
  filtersAvailables = AllActivityTypes;

  constructor(private messageService: MessageService) {
  }

  tooltipItems: MenuItem[] = [
    {
      tooltipOptions: {
        tooltipLabel: "Add"
      },
      icon: 'pi pi-pencil',
      command: () => {
        this.messageService.add({severity: 'info', summary: 'Add', detail: 'Data Added'});
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "Update"
      },
      icon: 'pi pi-refresh',
      command: () => {
        this.messageService.add({severity: 'success', summary: 'Update', detail: 'Data Updated'});
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "Delete"
      },
      icon: 'pi pi-trash',
      command: () => {
        this.messageService.add({severity: 'error', summary: 'Delete', detail: 'Data Deleted'});
      }
    },
    {
      tooltipOptions: {
        tooltipLabel: "Upload"
      },
      icon: 'pi pi-upload',
    },
    {
      tooltipOptions: {
        tooltipLabel: "Angular Website"
      },
      icon: 'pi pi-external-link',
      url: 'http://angular.io'
    }
  ];

  ngOnInit() {
    this.itemsFilters = Object.values(this.filtersAvailables).map((filter) => ({
      icon: filter.icon,
      command: () => {
        alert('It works!');
      },
      tooltipOptions: {
        tooltipLabel: 'Add'
      },
    }));
  }

}
