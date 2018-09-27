import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeAllListPage } from './employee-all-list';

@NgModule({
  declarations: [
    EmployeeAllListPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeAllListPage),
  ],
})
export class EmployeeAllListPageModule {}
