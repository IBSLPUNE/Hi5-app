import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AdminAgentDetailPage } from '../admin-agent-detail/admin-agent-detail';

/**
 * Generated class for the AdminAgentListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-agent-list',
  templateUrl: 'admin-agent-list.html',
})
export class AdminAgentListPage {

  loading: any;
 member_data: any;

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
       
        var DetailsmodalPage = this.popoverCtrl.create(AdminAgentDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
    showNewMemberRequest(){

        var MemberRequestPagemodalPage = this.modalCtrl.create('AdminAgentPage');
      
       
        MemberRequestPagemodalPage.onDidDismiss(data => {
         
                this.getAllAgentDetails();
           
        });
        MemberRequestPagemodalPage.present();
    }
     cancelAgentRequest(agent_req_id) {
       // this.showLoader();
        this.authService.cancelAgentRequest(agent_req_id).then((result) => {
            //this.loading.dismiss();

            this.getAllAgentDetails();
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
