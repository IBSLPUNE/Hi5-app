import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatePickerModule } from 'ion-datepicker';
import { ZoneSrPage } from './zone-sr';

@NgModule({
  declarations: [
    ZoneSrPage,
  ],
  imports: [
    IonicPageModule.forChild(ZoneSrPage),
    DatePickerModule
  ],
})
export class ZoneSrPageModule {}
