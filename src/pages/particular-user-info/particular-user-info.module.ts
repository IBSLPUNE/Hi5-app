import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticularUserInfoPage } from './particular-user-info';

@NgModule({
  declarations: [
    ParticularUserInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticularUserInfoPage),
  ],
})
export class ParticularUserInfoPageModule {}
