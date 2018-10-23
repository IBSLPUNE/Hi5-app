import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetRootsPage } from './street-roots';

@NgModule({
  declarations: [
    StreetRootsPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetRootsPage),
  ],
})
export class StreetRootsPageModule {}
