import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { IMap } from '../models/map.model';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'maps-list',
  styles: [
    require('./maps-list.component.scss')
  ],
  template: require('./maps-list.component.html')
})

export class MapListComponent {
  @Input() filter: string;
  @Input() maps: FirebaseListObservable<IMap[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
