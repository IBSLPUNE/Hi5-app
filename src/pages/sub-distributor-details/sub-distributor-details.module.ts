import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SubDistributorDetailsPage } from './sub-distributor-details';

@NgModule({
  declarations: [
    SubDistributorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SubDistributorDetailsPage),
  ],
})
export class SubDistributorDetailsPageModule {}
