import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistributorDetailsPage } from './distributor-details';

@NgModule({
  declarations: [
    DistributorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DistributorDetailsPage),
  ],
})
export class DistributorDetailsPageModule {}
