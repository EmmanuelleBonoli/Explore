import {Injectable} from '@angular/core';
import {Activity} from '../../models/activities/activity.class';

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
      type: ["dogFriendly", "run", "walk"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-08-15'),
      rating: 4.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid2',
      name: 'act2',
      description: 'desc2',
      type: ["ride", "run", "walk"],
      picture: '/trail-hiker.jpg',
      publication: new Date('2024-09-15'),
      rating: 3.2,
      duration: 180,
      difficulty: 'Moyen',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid3',
      name: 'act3',
      description: 'desc3',
      type: ["dogFriendly", "ride"],
      picture: '/path-ocean.jpg',
      publication: new Date('2024-09-19'),
      rating: 2.2,
      duration: 180,
      difficulty: 'Difficile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid4',
      name: 'Forest Adventure',
      description: 'Explore the depths of a serene forest.',
      type: ["walk", "run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-07-10'),
      rating: 1.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid5',
      name: 'Morning Ride',
      description: 'Cycle through picturesque morning landscapes.',
      type: ["ride", "walk"],
      picture: '/ride.jpg',
      publication: new Date('2024-06-15'),
      rating: 0.2,
      duration: 180,
      difficulty: 'Moyen',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid6',
      name: 'Doggie Dash',
      description: 'Bring your furry friend for a fun run!',
      type: ["dogFriendly", "run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-08-20'),
      rating: 4.2,
      duration: 180,
      difficulty: 'Difficile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid7',
      name: 'Sunset Stroll',
      description: 'Relaxing walk at sunset along the coastline.',
      type: ["walk"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-09-05'),
      rating: 3.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid8',
      name: 'Trail Trek',
      description: 'Embark on a challenging mountain trail.',
      type: ["walk", "run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-05-22'),
      rating: 2.2,
      duration: 180,
      difficulty: 'Moyen',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid9',
      name: 'Urban Jog',
      description: 'Discover hidden city gems while jogging.',
      type: ["run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-04-12'),
      rating: 1.2,
      duration: 180,
      difficulty: 'Difficile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid10',
      name: 'Doggy Playdate',
      description: 'Socialize with other dog lovers on a scenic walk.',
      type: ["dogFriendly", "walk"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-10-03'),
      rating: 4.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid11',
      name: 'Mountain Breeze',
      description: 'Enjoy fresh mountain air on a leisurely walk.',
      type: ["walk"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-07-19'),
      rating: 3.2,
      duration: 180,
      difficulty: 'Moyen',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid12',
      name: 'Park Run',
      description: 'Boost your stamina in a lush green park.',
      type: ["run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-06-25'),
      rating: 2.2,
      duration: 180,
      difficulty: 'Difficile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid13',
      name: 'Riverside Ride',
      description: 'Cycle along a peaceful river trail.',
      type: ["ride"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-08-30'),
      rating: 1.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid14',
      name: 'Beach Walk',
      description: 'Feel the sand between your toes on this beach walk.',
      type: ["walk", "dogFriendly"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-05-18'),
      rating: 4.2,
      duration: 180,
      difficulty: 'Moyen',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid15',
      name: 'Fitness Ride',
      description: 'Push your limits on this high-energy bike ride.',
      type: ["ride", "run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-04-30'),
      rating: 3.2,
      duration: 180,
      difficulty: 'Difficile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid16',
      name: 'Nature Walk',
      description: 'Discover local wildlife on a guided nature walk.',
      type: ["walk", "dogFriendly"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-07-07'),
      rating: 2.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid17',
      name: 'Coastal Run',
      description: 'Breathe in the ocean air on this coastal run.',
      type: ["run", "walk"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-09-01'),
      rating: 1.2,
      duration: 180,
      difficulty: 'Moyen',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid18',
      name: 'Meadow Ride',
      description: 'A peaceful bike ride through colorful meadows.',
      type: ["ride"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-10-14'),
      rating: 4.2,
      duration: 180,
      difficulty: 'Difficile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    },
    {
      id: 'uuid19',
      name: 'Hiker’s Retreat',
      description: 'Challenge yourself with this rugged mountain hike.',
      type: ["walk", "run"],
      picture: '/hiker-dog.jpg',
      publication: new Date('2024-11-05'),
      rating: 4.2,
      duration: 180,
      difficulty: 'Facile',
      creatorName: 'Major',
      creatorAvatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
    }
  ];
  //
  // dataActivities2: Activity[] = [
  //   {
  //     id: 'uuid11',
  //     name: 'Mountain Breeze',
  //     description: 'Enjoy fresh mountain air on a leisurely walk.',
  //     type: ["walk"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-07-19'),
  //     rating: 0.2,
  //   },
  //   {
  //     id: 'uuid12',
  //     name: 'Park Run',
  //     description: 'Boost your stamina in a lush green park.',
  //     type: ["run"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-06-25'),
  //     rating: 1.2,
  //   },
  //   {
  //     id: 'uuid13',
  //     name: 'Riverside Ride',
  //     description: 'Cycle along a peaceful river trail.',
  //     type: ["ride"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-08-30'),
  //     rating: 2.2,
  //   },
  //   {
  //     id: 'uuid14',
  //     name: 'Beach Walk',
  //     description: 'Feel the sand between your toes on this beach walk.',
  //     type: ["walk", "dogFriendly"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-05-18'),
  //     rating: 3.2,
  //   },
  //   {
  //     id: 'uuid15',
  //     name: 'Fitness Ride',
  //     description: 'Push your limits on this high-energy bike ride.',
  //     type: ["ride", "run"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-04-30'),
  //     rating: 4.2,
  //   },
  //   {
  //     id: 'uuid16',
  //     name: 'Nature Walk',
  //     description: 'Discover local wildlife on a guided nature walk.',
  //     type: ["walk", "dogFriendly"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-07-07'),
  //     rating: 1.2,
  //   },
  //   {
  //     id: 'uuid17',
  //     name: 'Coastal Run',
  //     description: 'Breathe in the ocean air on this coastal run.',
  //     type: ["run", "walk"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-09-01'),
  //     rating: 2.2,
  //   },
  //   {
  //     id: 'uuid18',
  //     name: 'Meadow Ride',
  //     description: 'A peaceful bike ride through colorful meadows.',
  //     type: ["ride"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-10-14'),
  //     rating: 3.2,
  //   },
  //   {
  //     id: 'uuid19',
  //     name: 'Hiker’s Retreat',
  //     description: 'Challenge yourself with this rugged mountain hike.',
  //     type: ["walk", "run"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-11-05'),
  //     rating: 4.2,
  //   }
  // ]
  //
  // dataActivities3: Activity[] = [
  //   {
  //     id: 'uuid20',
  //     name: 'Trail Explorers',
  //     description: 'Explore a new hiking trail with your dog.',
  //     type: ["dogFriendly", "walk"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-08-23'),
  //     rating: 1.2,
  //   },
  //   {
  //     id: 'uuid21',
  //     name: 'City Ride',
  //     description: 'Discover hidden alleys and city corners by bike.',
  //     type: ["ride"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-09-22'),
  //     rating: 2.2,
  //   },
  //   {
  //     id: 'uuid22',
  //     name: 'Lakeside Run',
  //     description: 'Run around the calm waters of a scenic lake.',
  //     type: ["run"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-08-13'),
  //     rating: 3.2,
  //   },
  //   {
  //     id: 'uuid23',
  //     name: 'Woodland Walk',
  //     description: 'Take a quiet stroll through ancient woods.',
  //     type: ["walk"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-10-18'),
  //     rating: 4.2,
  //   },
  //   {
  //     id: 'uuid24',
  //     name: 'Morning Trail',
  //     description: 'Start your day with a peaceful morning hike.',
  //     type: ["walk", "dogFriendly"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-11-01'),
  //     rating: 2.2,
  //   },
  //   {
  //     id: 'uuid25',
  //     name: 'Valley Ride',
  //     description: 'Cycle through a breathtaking valley route.',
  //     type: ["ride"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-07-29'),
  //     rating: 3.2,
  //   },
  //   {
  //     id: 'uuid26',
  //     name: 'Hike & Run',
  //     description: 'A mix of hiking and running through the hills.',
  //     type: ["run", "walk"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-09-27'),
  //     rating: 1.2,
  //   },
  //   {
  //     id: 'uuid27',
  //     name: 'Wildflower Walk',
  //     description: 'Enjoy fields of blooming wildflowers.',
  //     type: ["walk", "dogFriendly"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-06-05'),
  //     rating: 2.2,
  //   },
  //   {
  //     id: 'uuid28',
  //     name: 'Cycling Challenge',
  //     description: 'Conquer a challenging uphill bike ride.',
  //     type: ["ride", "run"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-05-20'),
  //     rating: 3.2,
  //   },
  //   {
  //     id: 'uuid29',
  //     name: 'Evening Jog',
  //     description: 'A light jog as the sun sets on the horizon.',
  //     type: ["run"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-07-03'),
  //     rating: 4.2,
  //   },
  //   {
  //     id: 'uuid30',
  //     name: 'Open Field Stroll',
  //     description: 'Walk through open fields and enjoy fresh air.',
  //     type: ["walk"],
  //     picture: '/hiker-dog.jpg',
  //     publication: new Date('2024-08-16'),
  //     rating: 0.2,
  //   }
  // ]

  getDataActivities(): Activity[] {
    return this.dataActivities;
  }

  // getDataActivities2(): Activity[] {
  //   return this.dataActivities2;
  // }
  //
  // getDataActivities3(): Activity[] {
  //   return this.dataActivities3;
  // }

  // todo: supprimer quand le backend sera en place
  getActivityById(activityId: string) {
    const activity = this.dataActivities.find(activity => activityId === activity.id);
    if (activity) {
      return activity
    } else {
      return this.dataActivities[0];
    }
  }
}
