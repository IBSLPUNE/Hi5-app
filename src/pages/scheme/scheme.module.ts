import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchemePage } from './scheme';
import { DatePickerModule } from 'ion-datepicker';


@NgModule({
  declarations: [
    SchemePage,
  ],
  imports: [
    IonicPageModule.forChild(SchemePage),
     DatePickerModule
  ],
})
export class SchemePageModule {}
