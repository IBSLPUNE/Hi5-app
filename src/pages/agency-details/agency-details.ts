import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { MemberDetailsPage } from '../member-details/member-details';

/**
 * Generated class for the AgencyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-details',
  templateUrl: 'agency-details.html',
})
export class AgencyDetailsPage {

 loading: any;
 member_data: any;
 id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl : ViewController) {
  this.id = this.navParams.get('id');
  this.getagencydetails();
        
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyDetailsPage');
  }

  public closeModal(){
		this.viewCtrl.dismiss();
	}
 getagencydetails(){
   this.showLoader();
            this.authService.getagencydetails(this.id).then((result) => {
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

  showModalDialog(req_data) {
       var data = {
              id: req_data.id,
              code: req_data.code,
              first_name: req_data.first_name,
              middle_name: req_data.middle_name,
              last_name: req_data.last_name,
              gender: req_data.gender,
              email: req_data.email,
              offical_contact_no: req_data.offical_contact_no,
              personal_contact_no: req_data.personal_contact_no,
              emergency_contact_no: req_data.emergency_contact_no,
              blood_group: req_data.blood_group,
              date_of_birth: req_data.date_of_birth,
              address: req_data.address,
              pin_code: req_data.pin_code,
              country: req_data.country,
              agency_id: req_data.agency_id,
              status: req_data.status,
              state: req_data.state,
              district: req_data.district
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(MemberDetailsPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
    cancelAgentRequest(agent_req_id) {
       // this.showLoader();
        this.authService.cancelAgentRequest(agent_req_id).then((result) => {
            //this.loading.dismiss();

            this.getagencydetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
      presentConfirm(agent_req_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelAgentRequest(agent_req_id);
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
