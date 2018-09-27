import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventAllListDetailsPage } from './event-all-list-details';

@NgModule({
  declarations: [
    EventAllListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventAllListDetailsPage),
  ],
})
export class EventAllListDetailsPageModule {}
