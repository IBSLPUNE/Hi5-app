import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAgentListPage } from './admin-agent-list';

@NgModule({
  declarations: [
    AdminAgentListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAgentListPage),
  ],
})
export class AdminAgentListPageModule {}
