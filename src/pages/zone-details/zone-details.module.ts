import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneDetailsPage } from './zone-details';

@NgModule({
  declarations: [
    ZoneDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneDetailsPage),
  ],
})
export class ZoneDetailsPageModule {}
