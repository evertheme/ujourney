import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../auth';

import { MapFormComponent } from './components/maps-form.component';
import { MapItemComponent } from './components/maps-item.component';
import { MapListComponent } from './components/maps-list.component';
import { MapsComponent } from './components/maps.component';
import { MapsMapComponent } from './components/maps-map.component';
import { AutoFocusDirective } from './directives/autofocus-directive';
import { MapService } from './services/maps.service';


const routes: Routes = [
  {path: 'maps', component: MapsComponent, canActivate: [AuthGuard]},
  {path: 'maps/map/:id', component: MapsMapComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AutoFocusDirective,
    MapFormComponent,
    MapItemComponent,
    MapListComponent,
    MapsComponent,
    MapsMapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MapService
  ]
})

export class MapsModule {}

export { MapService };
