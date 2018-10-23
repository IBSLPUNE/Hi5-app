import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartialMenuPage } from './partial-menu';

@NgModule({
  declarations: [
    PartialMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PartialMenuPage),
  ],
})
export class PartialMenuPageModule {}
