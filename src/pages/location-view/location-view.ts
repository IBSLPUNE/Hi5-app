import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the LocationViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location-view',
  templateUrl: 'location-view.html',
})
export class LocationViewPage {
 loading: any;
 employee_plan_list_data: any;
 selectedDate: any;
 attendaceId: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private authService: AuthServiceProvider, private toastCtrl: ToastController, public alertCtrl: AlertController,public viewCtrl: ViewController) {
      this.attendaceId = this.navParams.get('id');
      this.getAttendaceData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationViewPage');
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
     public closeModal() {
        this.viewCtrl.dismiss();
    }

}
