import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { AgencyRequestPage } from '../agency-request/agency-request';
import { AgencyAllListPage } from '../agency-all-list/agency-all-list';
import { CompanyProfilePage } from '../company-profile/company-profile';
import { AdminAgentListPage } from '../admin-agent-list/admin-agent-list';
import { AdminAllEventsShowPage } from '../admin-all-events-show/admin-all-events-show';
import { AdminEventListPage } from '../admin-event-list/admin-event-list';
import { DistributorListPage } from '../distributor-list/distributor-list';
import { SubDistributorListPage } from '../sub-distributor-list/sub-distributor-list';
import { ZoneListPage } from '../zone-list/zone-list';
import { ProductListPage } from '../product-list/product-list';
import { AllAttendanceListPage } from '../all-attendance-list/all-attendance-list';
import { StreetRootListPage } from '../street-root-list/street-root-list';
import { SchemeListPage } from '../scheme-list/scheme-list';
import { AdminDailySalesListPage } from '../admin-daily-sales-list/admin-daily-sales-list';
import { ResetPasswordListPage } from '../reset-password-list/reset-password-list';

/**
 * Generated class for the AdminMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-menu',
  templateUrl: 'admin-menu.html',
})
export class AdminMenuPage {

 
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public _app: App, private toastCtrl: ToastController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminMenuPage');
  }
   gotoAnotherPage(clickedOn) {
        
         if (clickedOn == 'AgencyList') {
            this.navCtrl.push(AgencyRequestPage);
        }
          if (clickedOn == 'AllAgency') {
            this.navCtrl.push(AgencyAllListPage);
        }
         if (clickedOn == 'CompanyProfile') {
            this.navCtrl.push(CompanyProfilePage);
        }
         if (clickedOn == 'AllList') {
            this.navCtrl.push(AdminAgentListPage);
        }
         if (clickedOn == 'EventNumber') {
            this.navCtrl.push(AdminAllEventsShowPage);
        }
         if (clickedOn == 'AllEvent') {
            this.navCtrl.push(AdminEventListPage);
        }
        if (clickedOn == 'Distributor') {
            this.navCtrl.push(DistributorListPage);
        }
         if (clickedOn == 'SubDistributor') {
            this.navCtrl.push(SubDistributorListPage);
        }
        if (clickedOn == 'zone') {
            this.navCtrl.push(ZoneListPage);
        }
         if (clickedOn == 'product') {
            this.navCtrl.push(ProductListPage);
        }
        if (clickedOn == 'AllAttendance') {
            this.navCtrl.push(AllAttendanceListPage);
        }
         if (clickedOn == 'StreetRoot') {
            this.navCtrl.push(StreetRootListPage);
        }
        if (clickedOn == 'Scheme') {
            this.navCtrl.push(SchemeListPage);
        }
        if (clickedOn == 'AgencySalesList') {
            this.navCtrl.push(AdminDailySalesListPage);
        }
        if (clickedOn == 'ResetPassword') {
            this.navCtrl.push(ResetPasswordListPage);
        }
        }
         presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(() => {
            //console.log('Dismissed toast');
        });
        toast.present();
    }

    showAlert(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    }

}
