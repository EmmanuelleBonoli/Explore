import {Injectable} from '@angular/core';
import {Activity} from '../../models/shared/activity.class';

@Injectable({
  providedIn: 'root',
})
export class DataActivitiesService {
  /* exemple d'activités test, sera supprimé quand le back sera mis en place */

  dataActivities: Activity[] = [
    {
      id: 'uuid1',
      name: 'act1',
      description: 'desc1',
      dogFriendly: true,
      cycling: false,
      running: true,
      walking: true,
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-08-15'),
    },
    {
      id: 'uuid2',
      name: 'act2',
      description: 'desc2',
      dogFriendly: false,
      cycling: true,
      running: true,
      walking: true,
      picture: '/trail-hiker.jpg',
      publication: new Date('2024-09-15'),
    },
    {
      id: 'uuid3',
      name: 'act3',
      description: 'desc3',
      dogFriendly: true,
      cycling: true,
      running: false,
      walking: false,
      picture: '/path-ocean.jpg',
      publication: new Date('2024-09-19'),
    },
  ];

  /*
à remplacer ici par une requete du back pour obtenir l'ensemble des activités
*/
  getDataActivities(): Activity[] {
    return this.dataActivities;
  }
}
