import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentAttendanceTimeWisePage } from './agent-attendance-time-wise';

@NgModule({
  declarations: [
    AgentAttendanceTimeWisePage,
  ],
  imports: [
    IonicPageModule.forChild(AgentAttendanceTimeWisePage),
  ],
})
export class AgentAttendanceTimeWisePageModule {}
