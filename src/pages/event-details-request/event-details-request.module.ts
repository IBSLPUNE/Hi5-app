import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsRequestPage } from './event-details-request';
import { DatePickerModule } from 'ion-datepicker';


@NgModule({
  declarations: [
    EventDetailsRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsRequestPage),
    DatePickerModule
  ],
})
export class EventDetailsRequestPageModule {}
