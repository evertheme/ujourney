import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  styles: [
    require('./app-header.component.scss')
  ],
  template: require('./app-header.component.html')
})

export class AppHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
}
