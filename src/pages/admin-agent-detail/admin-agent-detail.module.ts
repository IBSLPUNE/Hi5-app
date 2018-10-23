import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAgentDetailPage } from './admin-agent-detail';

@NgModule({
  declarations: [
    AdminAgentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAgentDetailPage),
  ],
})
export class AdminAgentDetailPageModule {}
