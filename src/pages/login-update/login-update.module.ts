import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginUpdatePage } from './login-update';

@NgModule({
  declarations: [
    LoginUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginUpdatePage),
  ],
})
export class LoginUpdatePageModule {}
