import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAttendanceDetailPage } from './all-attendance-detail';

@NgModule({
  declarations: [
    AllAttendanceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AllAttendanceDetailPage),
  ],
})
export class AllAttendanceDetailPageModule {}
