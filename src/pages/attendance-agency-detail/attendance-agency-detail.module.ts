import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendanceAgencyDetailPage } from './attendance-agency-detail';

@NgModule({
  declarations: [
    AttendanceAgencyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendanceAgencyDetailPage),
  ],
})
export class AttendanceAgencyDetailPageModule {}
