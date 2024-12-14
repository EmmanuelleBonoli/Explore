import {Injectable, inject} from '@angular/core';
import {ActivitiesApiService} from "./activities-api.service";
import {ActivitiesStoreService} from "./activities-store.service";
import {Activity} from "../../models/activities/activity.class";
import {Observable, tap, switchMap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesFacadeService {
  activitiesApiService: ActivitiesApiService = inject(ActivitiesApiService);
  activitiesStoreServices: ActivitiesStoreService = inject(ActivitiesStoreService);

  getAllActivitiesCategories(filter: string): Observable<Activity[]> {
    console.log('filter activity filter activity', filter);
    return this.activitiesApiService.getAllActivities(filter).pipe(
      switchMap((activities: Activity[]) => this.activitiesStoreServices.setAllActivities(activities)),
    )
  }

  getNextPageActivitiesCategories(page: number, category: string, filter: string): void {
    const paramsNextPage = {page, category, filter};
    this.activitiesApiService.getNextPageActivities(paramsNextPage).pipe(
      tap((activities: Activity[]): void => this.activitiesStoreServices.getNextPageActivities(activities)),
    ).subscribe()
  }

  createActivity(activity: Activity): void {
    this.activitiesApiService.createActivity(activity).pipe(
      tap((activity: Activity): void => this.activitiesStoreServices.createActivity(activity))
    ).subscribe()
  }

  updateActivity(activity: Activity): void {
    this.activitiesApiService.updateActivity(activity).pipe(
      tap((activity: Activity): void => this.activitiesStoreServices.updateActivity(activity))
    ).subscribe()
  }

  deleteActivity(activityId: string): void {
    this.activitiesApiService.deleteActivity(activityId).pipe(
      tap((): void => this.activitiesStoreServices.deleteActivity(activityId))
    ).subscribe()
  }

}
