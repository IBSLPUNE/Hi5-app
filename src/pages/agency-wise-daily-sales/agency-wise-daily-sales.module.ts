import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyWiseDailySalesPage } from './agency-wise-daily-sales';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AgencyWiseDailySalesPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyWiseDailySalesPage),
    NgxPaginationModule
  ],
})
export class AgencyWiseDailySalesPageModule {}
