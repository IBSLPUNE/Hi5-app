import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneEventPage } from './zone-event';

@NgModule({
  declarations: [
    ZoneEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneEventPage),
  ],
})
export class ZoneEventPageModule {}
