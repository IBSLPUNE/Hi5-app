import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyProfilePage } from './agency-profile';

@NgModule({
  declarations: [
    AgencyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyProfilePage),
  ],
})
export class AgencyProfilePageModule {}
