import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneDailySalePage } from './zone-daily-sale';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ZoneDailySalePage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneDailySalePage),
    NgxPaginationModule
  ],
})
export class ZoneDailySalePageModule {}
