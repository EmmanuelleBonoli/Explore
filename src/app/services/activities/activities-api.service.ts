import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS_ACTIVITIES} from "../../routes/api-routes";
import {Observable} from 'rxjs';
import {Activity} from "../../models/activities/activity.class";
import {ActivitiesParamsNextPage} from "../../models/activities/activities-params";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {
  private _http: HttpClient = inject(HttpClient);

  getAllActivities(filter: string): Observable<Activity[]> {
    return this._http.get<Activity[]>(`${API_ENDPOINTS_ACTIVITIES.getAllActivitiesCategories}/filter?=${filter}`);
  }

  getNextPageActivities(params: ActivitiesParamsNextPage): Observable<Activity[]> {
    return this._http.get<Activity[]>(`${API_ENDPOINTS_ACTIVITIES.getNextPageActivitiesCategories}/page=${params.page}&category=${params.category}&filter=${params.filter}`);
  }

  createActivity(activity: Activity): Observable<Activity> {
    return this._http.post<Activity>(`${API_ENDPOINTS_ACTIVITIES.createActivity}`, activity);
  }

  updateActivity(activity: Activity): Observable<Activity> {
    return this._http.put<Activity>(`${API_ENDPOINTS_ACTIVITIES.updateActivity}/${activity.id}`, activity);
  }

  deleteActivity(activityId: string): Observable<void> {
    return this._http.delete<void>(`${API_ENDPOINTS_ACTIVITIES.deleteActivity}/${activityId}`);
  }
}
