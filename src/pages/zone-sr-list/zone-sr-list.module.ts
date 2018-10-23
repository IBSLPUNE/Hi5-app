import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneSrListPage } from './zone-sr-list';

@NgModule({
  declarations: [
    ZoneSrListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneSrListPage),
  ],
})
export class ZoneSrListPageModule {}
