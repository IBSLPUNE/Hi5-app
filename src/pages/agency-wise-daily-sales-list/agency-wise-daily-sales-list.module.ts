import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyWiseDailySalesListPage } from './agency-wise-daily-sales-list';

@NgModule({
  declarations: [
    AgencyWiseDailySalesListPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyWiseDailySalesListPage),
  ],
})
export class AgencyWiseDailySalesListPageModule {}
