import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePickerModule } from 'ion-datepicker';
import { MemberRequestPage } from './member-request';

@NgModule({
  declarations: [
    MemberRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(MemberRequestPage),
    DatePickerModule
  ],
})
export class MemberRequestPageModule {}
