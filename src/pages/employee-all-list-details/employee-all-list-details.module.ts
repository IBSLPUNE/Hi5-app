import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeAllListDetailsPage } from './employee-all-list-details';

@NgModule({
  declarations: [
    EmployeeAllListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeAllListDetailsPage),
  ],
})
export class EmployeeAllListDetailsPageModule {}
