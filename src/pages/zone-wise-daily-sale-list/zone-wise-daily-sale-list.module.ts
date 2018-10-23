import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneWiseDailySaleListPage } from './zone-wise-daily-sale-list';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ZoneWiseDailySaleListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneWiseDailySaleListPage),
    NgxPaginationModule
  ],
})
export class ZoneWiseDailySaleListPageModule {}
