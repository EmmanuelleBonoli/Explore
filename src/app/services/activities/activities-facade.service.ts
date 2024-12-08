import {Injectable, inject} from '@angular/core';
import {ActivitiesApiService} from "./activities-api.service";
import {ActivitiesStoreService} from "./activities-store.service";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesFacadeService {
  activitiesApiService: ActivitiesApiService = inject(ActivitiesApiService);
  activitiesStoreServices: ActivitiesStoreService = inject(ActivitiesStoreService);

  getAllActivitiesCategories(filterActivity: string) {
    console.log('filter activity filter activity', filterActivity);
  }

}
