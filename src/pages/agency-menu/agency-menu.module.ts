import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyMenuPage } from './agency-menu';

@NgModule({
  declarations: [
    AgencyMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyMenuPage),
  ],
})
export class AgencyMenuPageModule {}
