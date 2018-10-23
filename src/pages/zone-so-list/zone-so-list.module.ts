import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneSoListPage } from './zone-so-list';

@NgModule({
  declarations: [
    ZoneSoListPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneSoListPage),
  ],
})
export class ZoneSoListPageModule {}
