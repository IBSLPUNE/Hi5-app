import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailySaleDatewiseListPage } from './daily-sale-datewise-list';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DailySaleDatewiseListPage,
  ],
  imports: [
    IonicPageModule.forChild(DailySaleDatewiseListPage),
    NgxPaginationModule

  ],
})
export class DailySaleDatewiseListPageModule {}
