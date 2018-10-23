import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAttendanceListPage } from './all-attendance-list';

@NgModule({
  declarations: [
    AllAttendanceListPage,
  ],
  imports: [
    IonicPageModule.forChild(AllAttendanceListPage),
  ],
})
export class AllAttendanceListPageModule {}
