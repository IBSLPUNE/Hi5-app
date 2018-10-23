import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneEventListPage } from './zone-event-list';

@NgModule({
  declarations: [
    ZoneEventListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneEventListPage),
  ],
})
export class ZoneEventListPageModule {}
