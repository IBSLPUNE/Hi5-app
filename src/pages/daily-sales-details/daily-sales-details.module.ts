import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySalesDetailsPage } from './daily-sales-details';

@NgModule({
  declarations: [
    DailySalesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySalesDetailsPage),
  ],
})
export class DailySalesDetailsPageModule {}
