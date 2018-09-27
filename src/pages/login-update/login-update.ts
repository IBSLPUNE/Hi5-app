import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController, ViewController, App  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { LoginPage } from '../login/login';
/**
 * Generated class for the LoginUpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-update',
  templateUrl: 'login-update.html',
})
export class LoginUpdatePage {

   loading: any;
   
   data: any;
   serverIP: any;

      loginData = {employee_id: '', password: '', new_password: '', confirm_password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController, public viewCtrl: ViewController, public _app: App) {
    this.serverIP = this.authService.serverIP;
    }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginUpdatePage');
   
  }
   doLogin() {
        this.showLoader();
         this.loginData.employee_id = localStorage.getItem('employee_id');
        this.authService.Updatelogin(this.loginData).then((result) => {
            this.loading.dismiss();

            this.data = result;

           
          // this.showAlert('success', 'Password Updated Successfully');
             this.closeModal();
            this._app.getRootNavs()[0].setRoot(LoginPage);
 
          }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
        
    }
     public closeModal() {

        this.viewCtrl.dismiss();
    }
       showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
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

    showError(text) {
        //this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
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
