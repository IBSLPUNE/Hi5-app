import { BrowserModule} from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
 import { IonicStorageModule } from '@ionic/storage';
 import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { EmployeeAllListPage } from '../pages/employee-all-list/employee-all-list';
import { AgencyAllListPage } from '../pages/agency-all-list/agency-all-list';
import { AgencyAllListDetilsPage } from '../pages/agency-all-list-detils/agency-all-list-detils';
import { EventAllListPage } from '../pages/event-all-list/event-all-list';
import { PartialMenuPage } from '../pages/partial-menu/partial-menu';
import { AgencyProfilePage } from '../pages/agency-profile/agency-profile';
import { UserInfoDetailsPage } from '../pages/user-info-details/user-info-details';
import { AgentProfilePage } from '../pages/agent-profile/agent-profile';
import { ParticularEventListPage } from '../pages/particular-event-list/particular-event-list';
import { CompanyProfilePage } from '../pages/company-profile/company-profile';
import { MemberDetailsPage } from '../pages/member-details/member-details';
import { AdminAllEventsShowPage } from '../pages/admin-all-events-show/admin-all-events-show';
import { AdminAgentListPage } from '../pages/admin-agent-list/admin-agent-list';
import { AdminAgentDetailPage } from '../pages/admin-agent-detail/admin-agent-detail';
import { AdminAllEventDetailPage } from '../pages/admin-all-event-detail/admin-all-event-detail';
import { AdminEventListPage } from '../pages/admin-event-list/admin-event-list';
import { EventTextDataPage } from '../pages/event-text-data/event-text-data';
import { EmployeeAllListDetailsPage } from '../pages/employee-all-list-details/employee-all-list-details';
import { DistributorListPage } from '../pages/distributor-list/distributor-list';
import { DistributorDetailsPage } from '../pages/distributor-details/distributor-details';
import { SubDistributorListPage } from '../pages/sub-distributor-list/sub-distributor-list';
import { SubDistributorDetailsPage } from '../pages/sub-distributor-details/sub-distributor-details';
import { AgentDistributorListPage } from '../pages/agent-distributor-list/agent-distributor-list';
import { DailySalesListPage } from '../pages/daily-sales-list/daily-sales-list';
import { DailySalesDetailsPage } from '../pages/daily-sales-details/daily-sales-details';
import { ZoneListPage } from '../pages/zone-list/zone-list';
import { ZoneDetailsPage } from '../pages/zone-details/zone-details';
import { ProductListPage } from '../pages/product-list/product-list';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { LocationPage } from '../pages/location/location';
import { ZoneSrListPage } from '../pages/zone-sr-list/zone-sr-list';
import { ZoneSrDetailPage } from '../pages/zone-sr-detail/zone-sr-detail';
import { ZoneSoListPage } from '../pages/zone-so-list/zone-so-list';
import { ZoneSoDetailPage } from '../pages/zone-so-detail/zone-so-detail';
import { AllAttendanceListPage } from '../pages/all-attendance-list/all-attendance-list';
import { AllAttendanceDetailPage } from '../pages/all-attendance-detail/all-attendance-detail';
import { AttendanceAgencyListPage } from '../pages/attendance-agency-list/attendance-agency-list';
import { AgencyWiseDailySalesListPage } from '../pages/agency-wise-daily-sales-list/agency-wise-daily-sales-list';
import { AgencyWiseDailySalesDatailPage } from '../pages/agency-wise-daily-sales-datail/agency-wise-daily-sales-datail';
import { StreetRootListPage } from '../pages/street-root-list/street-root-list';
import { StreetRootDetailPage } from '../pages/street-root-detail/street-root-detail';
import { ZoneEventListPage } from '../pages/zone-event-list/zone-event-list';
import { ZoneDailySaleListPage } from '../pages/zone-daily-sale-list/zone-daily-sale-list';
import { SchemeListPage } from '../pages/scheme-list/scheme-list';
import { SchemeDetailPage } from '../pages/scheme-detail/scheme-detail';
import { AgentAttendanceListPage } from '../pages/agent-attendance-list/agent-attendance-list';
import { AgentAttendanceDetailPage } from '../pages/agent-attendance-detail/agent-attendance-detail';
import { AdminAllEventListPage } from '../pages/admin-all-event-list/admin-all-event-list';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DatePickerModule } from 'ion-datepicker';
import { MomentModule } from 'angular2-moment';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgencyNamePipe } from '../pipes/agency-name/agency-name';
import { AgentNamePipe } from '../pipes/agent-name/agent-name';
import { EventNamePipe } from '../pipes/event-name/event-name';
import { SchemePipe } from '../pipes/scheme/scheme';
import { StreetrootPipe } from '../pipes/streetroot/streetroot';
import { SonamePipe } from '../pipes/soname/soname';
import { ProductnamePipe } from '../pipes/productname/productname';
import { RetailerPipe } from '../pipes/retailer/retailer';
import { DailysalesPipe } from '../pipes/dailysales/dailysales';

import { EmpAttendancePipe } from '../pipes/emp-attendance/emp-attendance';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation } from '@ionic-native/geolocation';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { Network } from '@ionic-native/network';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EmployeeAllListPage,
    AgencyAllListPage,
    AgencyAllListDetilsPage,
    EventAllListPage,
    EmployeeAllListDetailsPage,
    PartialMenuPage,
    AgencyProfilePage,
    UserInfoDetailsPage,
    AgentProfilePage,
    ParticularEventListPage,
    CompanyProfilePage,
    MemberDetailsPage,
    AdminAgentListPage,
    AdminAllEventsShowPage,
    AdminAllEventDetailPage,
    AdminEventListPage,
    EventTextDataPage,
    AgencyNamePipe,
    AgentNamePipe,
    EventNamePipe,
    SchemePipe,
    StreetrootPipe,
    SonamePipe,
    ProductnamePipe,
    RetailerPipe,
    DailysalesPipe,
    DistributorListPage,
    SubDistributorListPage,
    DistributorDetailsPage,
    SubDistributorDetailsPage,
    AgentDistributorListPage,
    DailySalesListPage,
    DailySalesDetailsPage,
    ZoneListPage,
    ZoneDetailsPage,
    ProductListPage,
    ProductDetailPage,
    LocationPage,
    ZoneSrListPage,
    ZoneSrDetailPage,
    ZoneSoListPage,
    ZoneSoDetailPage,
    AllAttendanceListPage,
    AllAttendanceDetailPage,
    AttendanceAgencyListPage,
    AgencyWiseDailySalesListPage,
    AgencyWiseDailySalesDatailPage,
    StreetRootListPage,
    StreetRootDetailPage,
    ZoneEventListPage,
    ZoneDailySaleListPage,
    SchemeListPage,
    SchemeDetailPage,
    AdminAgentDetailPage,
    AgentAttendanceListPage,
    AgentAttendanceDetailPage,
    EmpAttendancePipe,
    AdminAllEventListPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    DatePickerModule,
    MomentModule,
    NgxPaginationModule,
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    EmployeeAllListPage,
    AgencyAllListPage,
    AgencyAllListDetilsPage,
    EventAllListPage,
    PartialMenuPage,
    AgencyProfilePage,
    UserInfoDetailsPage,
    AgentProfilePage,
    ParticularEventListPage,
    CompanyProfilePage,
    MemberDetailsPage,
    AdminAgentListPage,
    AdminAllEventsShowPage,
    AdminAllEventDetailPage,
    AdminEventListPage,
    EventTextDataPage,
    EmployeeAllListDetailsPage,
    DistributorListPage,
    SubDistributorListPage,
    DistributorDetailsPage,
    SubDistributorDetailsPage,
    AgentDistributorListPage,
    DailySalesListPage,
    DailySalesDetailsPage,
    ZoneListPage,
    ZoneDetailsPage,
    ProductListPage,
    ProductDetailPage,
    LocationPage,
    ZoneSrListPage,
    ZoneSrDetailPage,
    ZoneSoListPage,
    ZoneSoDetailPage,
    AllAttendanceListPage,
    AllAttendanceDetailPage,
    AttendanceAgencyListPage,
    AgencyWiseDailySalesListPage,
    AgencyWiseDailySalesDatailPage,
    StreetRootListPage,
    StreetRootDetailPage,
    ZoneEventListPage,
    ZoneDailySaleListPage,
    SchemeListPage,
    SchemeDetailPage,
    AdminAgentDetailPage,
    AgentAttendanceListPage,
    AgentAttendanceDetailPage,
    AdminAllEventListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    FileTransfer,
   //FileUploadOptions, 
    FileTransferObject,
    File,
    InAppBrowser,
    LocationTrackerProvider,
    BackgroundGeolocation,
    Geolocation,
    ConnectivityServiceProvider,
    Network,
    NativeGeocoder,
    LocationAccuracy
  ]
})
export class AppModule {}
