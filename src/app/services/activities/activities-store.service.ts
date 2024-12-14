import {Injectable} from '@angular/core';
import {Activity} from "../../models/activities/activity.class";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesStoreService {

  private _activities$ = new BehaviorSubject<Activity[]>([]);

  constructor() {
  }

  setAllActivities(activities: Activity[]): Observable<Activity[]> {
    this._activities$.next(activities);
    return this._activities$.asObservable();
  }

  getNextPageActivities(activities: Activity[]): void {
    this._activities$.next([...this._activities$.value, ...activities]);
  }

  createActivity(activity: Activity): void {
    this._activities$.next([...this._activities$.value, activity]);
  }

  updateActivity(activity: Activity): void {
    const updatedActivity = this._activities$.value.map(act => act.id === activity.id ? activity : act);
    this._activities$.next(updatedActivity);
  }

  deleteActivity(activityID: string): void {
    const updatedActivities = this._activities$.value.filter(act => act.id !== activityID);
    this._activities$.next(updatedActivities);
  }
}
