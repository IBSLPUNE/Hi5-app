import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgencyDetailsPage } from './agency-details';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AgencyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AgencyDetailsPage),
    NgxPaginationModule
  ],
})
export class AgencyDetailsPageModule {}
