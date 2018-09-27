import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttendanceAgencyListPage } from './attendance-agency-list';

@NgModule({
  declarations: [
    AttendanceAgencyListPage,
  ],
  imports: [
    IonicPageModule.forChild(AttendanceAgencyListPage),
  ],
})
export class AttendanceAgencyListPageModule {}
