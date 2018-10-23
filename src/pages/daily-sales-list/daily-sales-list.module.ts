import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySalesListPage } from './daily-sales-list';

@NgModule({
  declarations: [
    DailySalesListPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySalesListPage),
  ],
})
export class DailySalesListPageModule {}
