/* tslint:disable:no-string-literal */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MapService } from '../services/maps.service';
import {IMap} from '../models/map.model';

@Component({
  template: `
    <div *ngIf="map">
      <div>
        Showing map details for product: {{id}}
      </div>
      <div>title: {{map.title}}</div>
      <section class="map-container">
        <ul *ngFor="let phase of map.phases" class="phase">
            <li>{{phase.title}}</li>
        </ul>
      </section>
    </div>
  `
})
export class MapsMapComponent implements OnInit, OnDestroy {
  map: Observable<IMap>;
  uid: string;
  private uidSub: any;
  private mapSub: any;

  constructor(private route: ActivatedRoute, private mapService: MapService) {}

  ngOnInit(): void {
    this.uidSub = this.route.params.subscribe(params => {
      this.uid = params['id'];
      const path = `/maps/${this.mapService.auth.id}/${this.uid}`;
      // console.log('path: ', path);
      this.mapSub = this.mapService.af.database.object(path).subscribe(map => {
        // console.log('map: ', map);
        this.map = map;
        // console.log('this.map: ', this.map);
      });
    });
  }

  ngOnDestroy(): void {
    this.uidSub.unsubscribe();
    this.mapSub.unsubscribe();
  }
}
