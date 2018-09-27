import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentAttendanceListPage } from './agent-attendance-list';

@NgModule({
  declarations: [
    AgentAttendanceListPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentAttendanceListPage),
  ],
})
export class AgentAttendanceListPageModule {}
