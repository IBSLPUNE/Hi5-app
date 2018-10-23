import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySalesProductListPage } from './daily-sales-product-list';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    DailySalesProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySalesProductListPage),
    NgxPaginationModule
  ],
})
export class DailySalesProductListPageModule {}
