import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordListPage } from './reset-password-list';

@NgModule({
  declarations: [
    ResetPasswordListPage,
  ],
  imports: [
    IonicPageModule.forChild(ResetPasswordListPage),
  ],
})
export class ResetPasswordListPageModule {}
