import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminEventRequestPage } from './admin-event-request';
import { DatePickerModule } from 'ion-datepicker';


@NgModule({
  declarations: [
    AdminEventRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminEventRequestPage),
     DatePickerModule
  ],
})
export class AdminEventRequestPageModule {}
