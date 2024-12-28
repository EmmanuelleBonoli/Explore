import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_ENDPOINTS_ACTIVITIES} from "../../routes/api-routes";
import {Observable} from 'rxjs';
import {Activity} from "../../models/activities/activity.class";
import {ActivitiesParamsNextPage} from "../../models/activities/activities-params";
import {ActivitiesSearch} from "../../models/activities/activities-search.types";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {
  private _http: HttpClient = inject(HttpClient);

  getAllActivities(filter: ActivitiesSearch): Observable<Activity[]> {
    const {localisation, types} = filter;
    let allActivitiesUrl: string = API_ENDPOINTS_ACTIVITIES.getAllActivitiesCategories

    if (localisation) {
      allActivitiesUrl += `/loc=${localisation}`;
    }

    if (types.length > 0) {
      allActivitiesUrl += `/types=${types.join(',')}`;
    }

    // todo : prévoir le cas où aucun types d'activité n'est sélectionné, renvoyer message à l'utilisateur sans interroger le back
    return this._http.get<Activity[]>(allActivitiesUrl);
  }

  getActivityById(activityId: string): Observable<Activity> {
    return this._http.get<Activity>(`${API_ENDPOINTS_ACTIVITIES.getOneActivity}/${activityId}`);
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
