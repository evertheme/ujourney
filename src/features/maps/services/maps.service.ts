import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { AuthService } from '../../../auth/services/auth.service';
import { IMap, Map } from '../models/map.model';


@Injectable()
export class MapService {
  visibleMaps$: Observable<IMap[]>;

  private path: string;
  private filter$: ReplaySubject<any> = new ReplaySubject(1);
  private filteredMaps$: FirebaseListObservable<IMap[]>;
  private maps$: FirebaseListObservable<IMap[]>;


  constructor(public af: AngularFire, public auth: AuthService) {
    this.path = `/maps/${auth.id}`;

    this.maps$ = af.database.list(this.path);

    this.filteredMaps$ = af.database.list(this.path, {query: {
      orderByChild: 'completed',
      equalTo: this.filter$
    }});

    this.visibleMaps$ = this.filter$
      .switchMap(filter => filter === null ? this.maps$ : this.filteredMaps$);
  }


  filterMaps(filter: string): void {
    switch (filter) {
      case 'false':
        this.filter$.next(false);
        break;

      case 'true':
        this.filter$.next(true);
        break;

      default:
        this.filter$.next(null);
        break;
    }
  }

  createMap(title: string): firebase.Promise<any> {
    return this.maps$.push(new Map(title));
  }

  removeMap(map: IMap): firebase.Promise<any> {
    return this.maps$.remove(map.$key);
  }

  updateMap(map: IMap, changes: any): firebase.Promise<any> {
    return this.maps$.update(map.$key, changes);
  }

}
