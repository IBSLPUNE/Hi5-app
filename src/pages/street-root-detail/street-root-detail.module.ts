import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetRootDetailPage } from './street-root-detail';

@NgModule({
  declarations: [
    StreetRootDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetRootDetailPage),
  ],
})
export class StreetRootDetailPageModule {}
