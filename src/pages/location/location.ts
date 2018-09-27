import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { LocationTrackerProvider } from '../../providers/location-tracker/location-tracker';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
    loading: any;
    employee_plan_list_data: any;
    selectedDate: any;

  attendancedata = { agent_id: '', date: '', in_time: '', lat: 0, lng: 0, place: '' };
  constructor(public navCtrl: NavController, public navParams: NavParams, public locationTracker: LocationTrackerProvider, public loadingCtrl: LoadingController, private authService: AuthServiceProvider, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getAttendaceData();
  }

  ionViewDidLoad() {
    this.locationTracker.startTracking();
    console.log('ionViewDidLoad LocationPage');
  }
   getAttendaceData() {
        this.showLoader();
        this.authService.getAttendaceData(localStorage.getItem('agent_id'), moment(this.selectedDate).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.employee_plan_list_data = result;
            
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
  locationData(){
        if (this.locationTracker.lat == 0) {
          this.showAlert('Message', 'Unable to find GPS location Please check your GPS settings');
            return;
        }
       
         var now = new Date();

        this.attendancedata.agent_id = localStorage.getItem('agent_id');
        this.attendancedata.date = moment(now).format('YYYY-MM-DD');
        this.attendancedata.in_time = moment(now).format('HH:mm');
        this.attendancedata.lat = this.locationTracker.lat;
        this.attendancedata.lng = this.locationTracker.lng;
        this.attendancedata.place = this.locationTracker.addr;
         this.showLoader();
        this.authService.locationData(this.attendancedata).then((result) => {
            this.loading.dismiss();
            this. getAttendaceData();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    showDetails(ead){
      var data = { id: ead.id,
      }
      var AttendanceDetailsmodalPage = this.popoverCtrl.create('LocationViewPage',data, { cssClass: 'clsPopup' });
       AttendanceDetailsmodalPage.onDidDismiss(() => {
            this.getAttendaceData();
        });
        AttendanceDetailsmodalPage.present();
    } 
    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
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
    }
    showAlert(title, text) {
        //this.loading.dismiss();
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    }

    
  stop(){
    this.locationTracker.stopTracking();
  }
   

}
