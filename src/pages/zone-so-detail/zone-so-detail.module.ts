import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneSoDetailPage } from './zone-so-detail';

@NgModule({
  declarations: [
    ZoneSoDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneSoDetailPage),
  ],
})
export class ZoneSoDetailPageModule {}
