export class Activity {
  id = '';
  name = 'Activity';
  description = 'Description';
  type: string[] = [];
  picture = '';
  publication = new Date();
  rating: number = 0;
  duration: number = 0;
  difficulty: string = '';
  creatorName: string = '';
  creatorAvatar: string = '';


  constructor(
    id: string,
    name: string,
    description: string,
    type: string[],
    picture: string,
    publication: Date,
    duration: number,
    difficulty: string,
    creatorName: string,
    creatorAvatar: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.type = type;
    this.picture = picture;
    this.publication = publication;
    this.duration = duration;
    this.difficulty = difficulty;
    this.creatorName = creatorName;
    this.creatorAvatar = creatorAvatar;
  }
}
