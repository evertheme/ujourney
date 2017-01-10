import { Component } from '@angular/core';
import { AuthService } from '../../auth';


@Component({
  selector: 'app',
  styles: [
    require('./app.component.scss')
  ],
  template: require('./app.component.html')
})

export class AppComponent {
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}
