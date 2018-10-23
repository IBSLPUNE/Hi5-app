import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreetRootListPage } from './street-root-list';

@NgModule({
  declarations: [
    StreetRootListPage,
  ],
  imports: [
    IonicPageModule.forChild(StreetRootListPage),
  ],
})
export class StreetRootListPageModule {}
