export class Activity {
  id = '';
  name = 'Activity';
  description = 'Description';
  type: string[] = [];
  picture = '';
  publication = new Date();

  constructor(
    id: string,
    name: string,
    description: string,
    type: string[],
    picture: string,
    publication: Date
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.picture = picture;
    this.publication = publication;
  }
}
