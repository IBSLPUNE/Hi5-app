import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the UserInfoDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-info-details',
  templateUrl: 'user-info-details.html',
})
export class UserInfoDetailsPage {

 loading: any;
 member_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getCreateUser();
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserInfoDetailsPage');
  }
 getCreateUser(){
   this.showLoader();
            this.authService.getCreateUser(localStorage.getItem('reporting_id')).then((result) => {
            this.loading.dismiss();
            this.member_data = result;
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

   showModal(cof) {
      
    }
   
     deactiveUser(user_id) {
       // this.showLoader();
        this.authService.deactiveUser(localStorage.getItem('agent_id'), user_id).then((result) => {
            //this.loading.dismiss();

            this.getCreateUser();
            //console.log(this.arrPersonalDetails.first_name);
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     activeUser(user_id) {
       // this.showLoader();
        this.authService.activeUser(localStorage.getItem('agent_id'), user_id).then((result) => {
            //this.loading.dismiss();

            this.getCreateUser();
            //console.log(this.arrPersonalDetails.first_name);
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    showModalDialog(req_data){
   
         let data = { id: req_data.id,
         email: req_data.email,
         username: req_data.username,
         first_name: req_data.first_name,
         middle_name: req_data.middle_name,
         last_name: req_data.last_name,
         role_id: req_data.role_id,
         agent_id: req_data.agent_id,
         status: req_data.status,
         date_of_birth: req_data.date_of_birth,
         address: req_data.address,
         pin_code: req_data.pin_code,
         agency: req_data.agency }
           var DetailsmodalPage = this.popoverCtrl.create('ParticularUserInfoPage', data);
       
       DetailsmodalPage.onDidDismiss(() => {
            this.getCreateUser();
        });
        DetailsmodalPage.present();
    }
     presentConfirm(btnClick, user_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        console.log('Ok clicked');
                        if (btnClick == 'Active') {
                            this.activeUser(user_id);
                        }
                        if (btnClick == 'Deactive') {
                            this.deactiveUser(user_id);
                        }
                        }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    }
    

}
