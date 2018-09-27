import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventTextDataPage } from './event-text-data';

@NgModule({
  declarations: [
    EventTextDataPage,
  ],
  imports: [
    IonicPageModule.forChild(EventTextDataPage),
  ],
})
export class EventTextDataPageModule {}
