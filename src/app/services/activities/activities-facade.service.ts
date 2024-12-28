import {Injectable, inject} from '@angular/core';
import {ActivitiesApiService} from "./activities-api.service";
import {ActivitiesStoreService} from "./activities-store.service";
import {Activity} from "../../models/activities/activity.class";
import {Observable, tap, switchMap, of} from 'rxjs';
import {ActivitiesSearch} from "../../models/activities/activities-search.types";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesFacadeService {
  activitiesApiService: ActivitiesApiService = inject(ActivitiesApiService);
  activitiesStoreServices: ActivitiesStoreService = inject(ActivitiesStoreService);

  getAllActivitiesCategories(filter: ActivitiesSearch): Observable<Activity[]> {
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

  getActivityById(activityId: string): Observable<Activity> {
    const activityFromStore = this.activitiesStoreServices.getActivityById(activityId);

    if (activityFromStore) {
      return of(activityFromStore);
    } else {
      return this.activitiesApiService.getActivityById(activityId).pipe(
        tap((activity: Activity): void => {
          this.activitiesStoreServices.addActivity(activity);
        })
      );
    }
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
