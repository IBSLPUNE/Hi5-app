import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAgentPage } from './admin-agent';
import { DatePickerModule } from 'ion-datepicker';

@NgModule({
  declarations: [
    AdminAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAgentPage),
    DatePickerModule
  ],
})
export class AdminAgentPageModule {}
