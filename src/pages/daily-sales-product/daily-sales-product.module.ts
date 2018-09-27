import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySalesProductPage } from './daily-sales-product';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DailySalesProductPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySalesProductPage),
    NgxPaginationModule
  ],
})
export class DailySalesProductPageModule {}
