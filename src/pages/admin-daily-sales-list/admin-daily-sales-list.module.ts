import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminDailySalesListPage } from './admin-daily-sales-list';

@NgModule({
  declarations: [
    AdminDailySalesListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminDailySalesListPage),
  ],
})
export class AdminDailySalesListPageModule {}
