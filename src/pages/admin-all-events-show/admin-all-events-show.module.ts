import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAllEventsShowPage } from './admin-all-events-show';

@NgModule({
  declarations: [
    AdminAllEventsShowPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAllEventsShowPage),
  ],
})
export class AdminAllEventsShowPageModule {}
