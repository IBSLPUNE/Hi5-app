import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParticularEventListPage } from './particular-event-list';

@NgModule({
  declarations: [
    ParticularEventListPage,
  ],
  imports: [
    IonicPageModule.forChild(ParticularEventListPage),
  ],
})
export class ParticularEventListPageModule {}
