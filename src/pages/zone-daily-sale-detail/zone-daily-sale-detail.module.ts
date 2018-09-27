import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneDailySaleDetailPage } from './zone-daily-sale-detail';

@NgModule({
  declarations: [
    ZoneDailySaleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneDailySaleDetailPage),
  ],
})
export class ZoneDailySaleDetailPageModule {}
