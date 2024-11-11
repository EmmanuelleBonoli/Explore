export class Activity {
  id = '';
  name = 'Activity';
  description = 'Description';
  dogFriendly = false;
  cycling = false;
  running = false;
  walking = false;
  picture = '';
  publication = new Date();

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
