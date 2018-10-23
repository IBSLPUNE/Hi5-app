import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneSrDetailPage } from './zone-sr-detail';

@NgModule({
  declarations: [
    ZoneSrDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneSrDetailPage),
  ],
})
export class ZoneSrDetailPageModule {}
