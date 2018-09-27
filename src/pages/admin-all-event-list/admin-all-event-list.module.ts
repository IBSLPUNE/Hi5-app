import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAllEventListPage } from './admin-all-event-list';

@NgModule({
  declarations: [
    AdminAllEventListPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAllEventListPage),
  ],
})
export class AdminAllEventListPageModule {}
