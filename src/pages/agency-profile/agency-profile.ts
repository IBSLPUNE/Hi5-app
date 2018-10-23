import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AgencyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-profile',
  templateUrl: 'agency-profile.html',
})
export class AgencyProfilePage {

  loading: any;
   agancy_data: any;
    parent: any;
   


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
   
  this.getagencydetails();
   
  }

  ionViewDidLoad() {
      this.parent = this.navParams.get('parent');

        if (this.parent == 'SO') {
            this.getagencydetails();
        }
        else {
            this.getagencydetails();
        }
    
  }
  getagencydetails(){
   
            this.authService.getAgencyType(localStorage.getItem('agency_id')).then((result) => {
            this.agancy_data = result;
           
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
        toast.present();
  }
}
