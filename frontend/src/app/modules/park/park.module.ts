import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParkRoutingModule } from './park-routing.module';
import { ParkComponent } from './pages/park/park.component';

@NgModule({
  declarations: [ParkComponent],
  imports: [
    CommonModule,
    ParkRoutingModule
  ]
})
export class ParkModule { }
