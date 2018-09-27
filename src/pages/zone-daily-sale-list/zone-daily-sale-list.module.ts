import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneDailySaleListPage } from './zone-daily-sale-list';

@NgModule({
  declarations: [
    ZoneDailySaleListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneDailySaleListPage),
  ],
})
export class ZoneDailySaleListPageModule {}
