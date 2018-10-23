import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { ZoneSrListPage } from '../zone-sr-list/zone-sr-list';
import { ZoneSoListPage } from '../zone-so-list/zone-so-list';
import { ZoneEventListPage } from '../zone-event-list/zone-event-list';
import { ZoneDailySaleListPage } from '../zone-daily-sale-list/zone-daily-sale-list';
import { AttendanceAgencyListPage } from '../attendance-agency-list/attendance-agency-list';
import { AgencyProfilePage } from '../agency-profile/agency-profile';

/**
 * Generated class for the ZoneMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-menu',
  templateUrl: 'zone-menu.html',
})
export class ZoneMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public _app: App, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneMenuPage');
  }
   gotoAnotherPage(clickedOn) {
      
        
        if (clickedOn == 'SRList') {
            this.navCtrl.push(ZoneSrListPage);
        }
        if (clickedOn == 'SOList') {
            this.navCtrl.push(ZoneSoListPage);
        }
        if (clickedOn == 'AllEvent') {
            this.navCtrl.push(ZoneEventListPage);
        }
        if (clickedOn == 'AgencySalesList') {
            this.navCtrl.push(ZoneDailySaleListPage);
        }
        if (clickedOn == 'AttendanceList') {
            this.navCtrl.push(AttendanceAgencyListPage);
        }
         if (clickedOn == 'AllAgency') {
            this.navCtrl.push(AgencyProfilePage, { parent: "ASM" });
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
