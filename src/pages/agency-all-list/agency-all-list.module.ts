import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyAllListPage } from './agency-all-list';

@NgModule({
  declarations: [
    AgencyAllListPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyAllListPage),
  ],
})
export class AgencyAllListPageModule {}
