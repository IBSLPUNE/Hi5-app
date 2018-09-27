import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventAllListPage } from './event-all-list';


@NgModule({
  declarations: [
    EventAllListPage,
  ],
  imports: [
    IonicPageModule.forChild(EventAllListPage),
    
  ],
})
export class EventAllListPageModule {}
