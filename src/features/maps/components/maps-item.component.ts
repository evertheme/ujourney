import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IMap } from '../models/map.model';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'maps-item',
  styles: [
    require('./maps-item.component.scss')
  ],
  template: require('./maps-item.component.html')
})

export class MapItemComponent {
  @Input() map: IMap;
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);

  editing: boolean = false;
  title: string = '';

  editTitle(): void {
    this.editing = true;
    this.title = this.map.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.map.title) {
        this.update.emit({title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.update.emit({
      completed: !this.map.completed
    });
  }
}
