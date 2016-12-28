import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'maps-form',
  styles: [
    require('./maps-form.component.scss')
  ],
  template: require('./maps-form.component.html')
})

export class MapFormComponent {
  @Output() createMap = new EventEmitter(false);

  title: string = '';

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createMap.emit(title);
    }
    this.clear();
  }
}
