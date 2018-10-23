import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentAttendanceInOutDetailPage } from './agent-attendance-in-out-detail';

@NgModule({
  declarations: [
    AgentAttendanceInOutDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentAttendanceInOutDetailPage),
  ],
})
export class AgentAttendanceInOutDetailPageModule {}
