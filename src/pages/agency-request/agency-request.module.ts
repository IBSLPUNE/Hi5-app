import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyRequestPage } from './agency-request';

@NgModule({
  declarations: [
    AgencyRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyRequestPage),
  ],
})
export class AgencyRequestPageModule {}
