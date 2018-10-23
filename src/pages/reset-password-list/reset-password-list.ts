import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ResetPasswordListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password-list',
  templateUrl: 'reset-password-list.html',
})
export class ResetPasswordListPage {

 loading: any;
 member_data: any;
 id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.getAllAgentDetails();
  }
    getAllAgentDetails(){
        this.showLoader();
            this.authService.getAllAgentDetails().then((result) => {
            this.loading.dismiss();
            this.member_data = result;
            this.id = this.member_data.id;
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
     getResetPassword(agent_id) {
       // this.showLoader();
        this.authService.getResetPassword(agent_id).then((result) => {
            //this.loading.dismiss();

            if (result["status"].toLowerCase().indexOf('success') >= 0) {
                this.showAlert('success', result["status"]);
                 //this.closeModal();
              } 
              else
              {
                this.showAlert('success', result["status"]);
              }
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
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
}
