import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneListPage } from './zone-list';

@NgModule({
  declarations: [
    ZoneListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneListPage),
  ],
})
export class ZoneListPageModule {}
