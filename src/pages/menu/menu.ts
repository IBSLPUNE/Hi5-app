import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, App } from 'ionic-angular';
import { ParticularEventListPage } from '../particular-event-list/particular-event-list';
import { LoginPage } from '../login/login';
import { AgentProfilePage } from '../agent-profile/agent-profile';
import { AgentDistributorListPage } from '../agent-distributor-list/agent-distributor-list';
import { DailySalesListPage } from '../daily-sales-list/daily-sales-list';
import { LocationPage } from '../location/location';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { DailySalesProductPage } from '../daily-sales-product/daily-sales-product';
import { AgentAttendanceListPage } from '../agent-attendance-list/agent-attendance-list';


import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public _app: App, private toastCtrl: ToastController, private InAppBrowser: InAppBrowser, public locationTracker: LocationTrackerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
    gotoAnotherPage(clickedOn) {
      
        
         if (clickedOn == 'AllEvent') {
            this.navCtrl.push(ParticularEventListPage);
        }
          if (clickedOn == 'Logout') {
            localStorage.removeItem('agent_id');
            this._app.getRootNavs()[0].setRoot(LoginPage); //this._app.getRootNav().setRoot(LoginPage);
        }
         if (clickedOn == 'AgentProfile') {
            this.navCtrl.push(AgentProfilePage);
        }
         if (clickedOn == 'apk') {
             this.InAppBrowser.create('http://13.229.157.255/home',"_system","defaultBrowser=chrome");
        }
        if (clickedOn == 'AgentDistributor') {
             this.navCtrl.push(AgentDistributorListPage);
        }
         if (clickedOn == 'Sales') {
             this.navCtrl.push(DailySalesListPage);
        }
         if (clickedOn == 'Location') {
             this.navCtrl.push(LocationPage);
        }
          if (clickedOn == 'Product') {
             this.navCtrl.push(DailySalesProductPage);
        }
         if (clickedOn == 'EmpWiseAttendance') {
             this.navCtrl.push(AgentAttendanceListPage);
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
