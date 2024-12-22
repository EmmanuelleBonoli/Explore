import {ActivityType} from "./all-activities.types";

export const defaultFilters: ActivityType[] = [
  'run', 'dogFriendly', 'walk', 'restaurant', 'ride']


export type ActivitiesSearch = {
  localisation: string;
  types: ActivityType[];
}
