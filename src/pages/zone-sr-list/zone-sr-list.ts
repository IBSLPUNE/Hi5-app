import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ZoneSrDetailPage } from '../zone-sr-detail/zone-sr-detail';

/**
 * Generated class for the ZoneSrListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-sr-list',
  templateUrl: 'zone-sr-list.html',
})
export class ZoneSrListPage {

 loading: any;
 member_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, private modalCtrl: ModalController) {
    this.getmemberdetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZoneSrListPage');
  }
   getmemberdetails(){
   this.showLoader();
            this.authService.getmemberdetails(localStorage.getItem('agency_id')).then((result) => {
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
            district: req_data.district,
            state: req_data.state
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(ZoneSrDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
    showZoneSRRequest(){

        var MemberRequestPagemodalPage = this.modalCtrl.create('ZoneSrPage');
      
       
        MemberRequestPagemodalPage.onDidDismiss(data => {
         
                this.getmemberdetails();
           
        });
        MemberRequestPagemodalPage.present();
    }
     cancelAgentRequest(agent_req_id) {
       // this.showLoader();
        this.authService.cancelAgentRequest(agent_req_id).then((result) => {
            //this.loading.dismiss();

            this.getmemberdetails();
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
