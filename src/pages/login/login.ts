import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { PartialMenuPage } from '../partial-menu/partial-menu';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   loading: any;
   
    data: any;
    serverIP: any;

      loginData = { username: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.serverIP = this.authService.serverIP;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
    doLogin() {
        this.showLoader();
        this.authService.login(this.loginData).then((result) => {
            this.loading.dismiss();
            this.data = result;
            localStorage.setItem('empID', this.data.username);
            localStorage.setItem('employee_id', this.data.id);
            localStorage.setItem('empRole', this.data.role);
            localStorage.setItem('agent_id', this.data.agent_id);
            localStorage.setItem('agency_id', this.data.agency_id);
            localStorage.setItem('avatar_file_name', this.data.image);
            localStorage.setItem('empGender', this.data.gender);
            localStorage.setItem('reporting_id', this.data.reporting_id);
            localStorage.setItem('second_reporting_id', this.data.second_reporting_id);
            

          if (this.data.role == 'Agent') {
                //console.log('Login successfully.');
                this.navCtrl.setRoot(PartialMenuPage);
            }
            else {
                this.navCtrl.setRoot(PartialMenuPage);
            }
        },
        
         (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
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
}