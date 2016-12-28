import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../services/maps.service';


@Component({
  template: require('./maps.component.html')
})

export class MapsComponent {
  filter: Observable<any>;

  constructor(public route: ActivatedRoute, public mapService: MapService) {
    console.log(route.params);
    this.filter = route.params
      .pluck('completed')
      .do((value: string) => mapService.filterMaps(value));
  }
}
