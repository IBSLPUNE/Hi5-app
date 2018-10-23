import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyDailySalesDatewiseListPage } from './agency-daily-sales-datewise-list';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AgencyDailySalesDatewiseListPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyDailySalesDatewiseListPage),
    NgxPaginationModule
  ],
})
export class AgencyDailySalesDatewiseListPageModule {}
