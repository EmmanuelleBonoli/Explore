export class Activity {
  id: string = '';
  name: string = 'Activity';
  description: string = 'Description';
  dogFriendly: boolean = false;
  cycling: boolean = false;
  running: boolean = false;
  walking: boolean = false;
  picture: string = '';
  publication: Date = new Date();

  constructor(
    id: string,
    name: string,
    description: string,
    dogFriendly: boolean,
    cycling: boolean,
    running: boolean,
    walking: boolean,
    picture: string,
    publication: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.dogFriendly = dogFriendly;
    this.cycling = cycling;
    this.running = running;
    this.walking = walking;
    this.picture = picture;
    this.publication = publication;
  }
}
