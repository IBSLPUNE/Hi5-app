import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserInfoDetailsPage } from './user-info-details';

@NgModule({
  declarations: [
    UserInfoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(UserInfoDetailsPage),
  ],
})
export class UserInfoDetailsPageModule {}
