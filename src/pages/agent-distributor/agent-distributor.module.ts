import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgentDistributorPage } from './agent-distributor';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AgentDistributorPage,
  ],
  imports: [
    IonicPageModule.forChild(AgentDistributorPage),
    NgxPaginationModule
  
  ],
})
export class AgentDistributorPageModule {}
