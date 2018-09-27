import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
//import { MemberRequestPage } from '../member-request/member-request';
import { EmployeeAllListPage } from '../employee-all-list/employee-all-list';
import { EventAllListPage } from '../event-all-list/event-all-list';
import { AgencyProfilePage } from '../agency-profile/agency-profile';
import { UserInfoDetailsPage } from '../user-info-details/user-info-details';
import { AttendanceAgencyListPage } from '../attendance-agency-list/attendance-agency-list';
import { AgencyWiseDailySalesListPage } from '../agency-wise-daily-sales-list/agency-wise-daily-sales-list';

/**
 * Generated class for the AgencyMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-menu',
  templateUrl: 'agency-menu.html',
})
export class AgencyMenuPage {

   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public _app: App, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyMenuPage');
  }
  gotoAnotherPage(clickedOn) {
      
    
       
         if (clickedOn == 'AllList') {
            this.navCtrl.push(EmployeeAllListPage);
        }
        if (clickedOn == 'AllAgency') {
            this.navCtrl.push(AgencyProfilePage, { parent: "SO" });
        }
         if (clickedOn == 'AllEvent') {
            this.navCtrl.push(EventAllListPage);
        }
        if (clickedOn == 'UserInfo') {
            this.navCtrl.push(UserInfoDetailsPage);
        }
        if (clickedOn == 'AttendanceList') {
            this.navCtrl.push(AttendanceAgencyListPage);
        }
        if (clickedOn == 'AgencySalesList') {
            this.navCtrl.push(AgencyWiseDailySalesListPage);
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
