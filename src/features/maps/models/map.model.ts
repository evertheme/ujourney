/* tslint:disable:no-string-literal */

export class MapEvent {
  comment: string = '';
  rating: number = 0;
  sort: number = 0;

  constructor(
    comment: string,
    rating: number,
    sort: number
  ) {
    this.comment = comment;
    this.rating = rating;
    this.sort = sort;
  }
}

export class MapPersona {
  name: string;
  title: string = 'Persona Title';
  age: string = 'Persona Age';
  location: string = 'Persona Location';

  constructor(name: string) {
    this.name = name;
  }

  updatePersona(key: string, value: any): void {
    switch (key) {
      case 'name':
        this.name = value;
        break;
      case 'title':
        this.title = value;
        break;
      case 'age':
        this.age = value;
        break;
      case 'location':
        this.location = value;
        break;
    }
  }
}

export class MapPhase {
  title: string;
  description: string = '';
  categories: Array<any> = [];
  sort: number = 0;

  constructor(title: string, sort: number) {
    this.title = title;
    this.sort = sort;
  }

  addCategory(title: string): void {
    this.categories.push({
      title: title,
      content: []
    });
  }

  deleteCategory(title: string): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].title === title) {
        this.categories.splice(i, 1);
        break;
      }
    }
  }

}

export interface IMap {
  $key?: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
  title: string;
  description: string;
  userProfile: MapPersona;
  phases: Array<MapPhase>;
}

export class Map implements IMap {
  title: string;
  completed: boolean = false;
  createdAt: number = firebase.database['ServerValue']['TIMESTAMP'];
  updatedAt: number = firebase.database['ServerValue']['TIMESTAMP'];
  description: string = '';
  userProfile: MapPersona = new MapPersona('Persona Name');
  phases: Array<MapPhase>;

  constructor(title: string) {
    this.title = title;
    this.phases = [
      this.createPhase('Phase 1', 0),
      this.createPhase('Phase 2', 1),
      this.createPhase('Phase 3', 2)
    ];
  }

  getCreatedAt(): number {
    return this.createdAt;
  }

  setUpdatedAt(): void {
    this.updatedAt = firebase.database['ServerValue']['TIMESTAMP'];
  }

  addCategory(title: string): void {
    let i: number = 0;
    for (i = 0; i < this.phases.length; i++) {
      this.phases[i].addCategory(title);
    }
  }

  deleteCategory(title: string): void {
    let i: number = 0;
    for (i = 0; i < this.phases.length; i++) {
      this.phases[i].deleteCategory(title);
    }
  }

  createPhase(name: string, sort: number): MapPhase {
    return new MapPhase(name, sort);
  }

  updatePersona(key: string, value: number): void {
    this.userProfile.updatePersona(key, value);
  }
}
