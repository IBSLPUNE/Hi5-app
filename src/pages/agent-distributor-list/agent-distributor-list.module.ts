import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentDistributorListPage } from './agent-distributor-list';

@NgModule({
  declarations: [
    AgentDistributorListPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentDistributorListPage),
  ],
})
export class AgentDistributorListPageModule {}
