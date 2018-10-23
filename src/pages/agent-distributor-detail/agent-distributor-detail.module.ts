import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentDistributorDetailPage } from './agent-distributor-detail';

@NgModule({
  declarations: [
    AgentDistributorDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentDistributorDetailPage),
  ],
})
export class AgentDistributorDetailPageModule {}
