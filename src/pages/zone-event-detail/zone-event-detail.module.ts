import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneEventDetailPage } from './zone-event-detail';

@NgModule({
  declarations: [
    ZoneEventDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneEventDetailPage),
  ],
})
export class ZoneEventDetailPageModule {}
