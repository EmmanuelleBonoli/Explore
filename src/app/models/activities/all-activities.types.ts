export type ActivityType = 'run' | 'dogFriendly' | 'walk' | 'restaurant' | 'ride';

export type Activity = {
  type: ActivityType;
  icon: string;
  backgroundColor: string;
  iconColor: string;
  tooltip: string;
}

export const AllActivitiesTypes: Activity[] = [
  {
    type: 'run',
    icon: 'fa-person-running',
    backgroundColor: '#14b8a6',
    iconColor: 'white',
    tooltip: 'Course à pieds'
  },
  {
    type: 'dogFriendly',
    icon: 'fa-dog',
    backgroundColor: '#14b8a6',
    iconColor: 'white',
    tooltip: 'Dog friendly'
  },
  {
    type: 'walk',
    icon: 'fa-person-hiking',
    backgroundColor: '#14b8a6',
    iconColor: 'white',
    tooltip: "Randonnée"
  },
  {
    type: 'restaurant',
    icon: 'fa-utensils',
    backgroundColor: '#14b8a6',
    iconColor: 'white',
    tooltip: 'Restaurant'
  },
  {
    type: 'ride',
    icon: 'fa-person-biking',
    backgroundColor: '#14b8a6',
    iconColor: 'white',
    tooltip: 'Sortie vélo'
  }
]



