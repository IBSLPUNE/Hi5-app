import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentAttendanceDetailPage } from './agent-attendance-detail';

@NgModule({
  declarations: [
    AgentAttendanceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentAttendanceDetailPage),
  ],
})
export class AgentAttendanceDetailPageModule {}
