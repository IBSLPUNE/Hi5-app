import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAllEventDetailPage } from './admin-all-event-detail';

@NgModule({
  declarations: [
    AdminAllEventDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAllEventDetailPage),
  ],
})
export class AdminAllEventDetailPageModule {}
