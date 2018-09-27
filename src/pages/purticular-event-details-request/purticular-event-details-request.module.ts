import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PurticularEventDetailsRequestPage } from './purticular-event-details-request';
import { DatePickerModule } from 'ion-datepicker';

@NgModule({
  declarations: [
    PurticularEventDetailsRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(PurticularEventDetailsRequestPage),
    DatePickerModule
  ],
})
export class PurticularEventDetailsRequestPageModule {}
