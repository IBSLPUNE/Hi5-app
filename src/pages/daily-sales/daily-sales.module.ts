import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySalesPage } from './daily-sales';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DailySalesPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySalesPage),
    NgxPaginationModule
  ],
})
export class DailySalesPageModule {}
