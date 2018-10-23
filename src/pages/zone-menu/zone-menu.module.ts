import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZoneMenuPage } from './zone-menu';

@NgModule({
  declarations: [
    ZoneMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneMenuPage),
  ],
})
export class ZoneMenuPageModule {}
