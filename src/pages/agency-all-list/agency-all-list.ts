import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { AgencyAllListDetilsPage } from '../agency-all-list-detils/agency-all-list-detils';

/**
 * Generated class for the AgencyAllListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-all-list',
  templateUrl: 'agency-all-list.html',
})
export class AgencyAllListPage {

   loading: any;
   agancy_data: any;
    parent: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
        
  }

  ionViewDidLoad() {
   this.parent = this.navParams.get('parent');
     if (this.parent == 'Agency') {
     
             this.getagencydetails();
        }
        else {
        
            this.getAllAgencyType();
        
    }
   
  }
  getagencydetails(){
   this.showLoader();
            this.authService.getAgencyType(localStorage.getItem('agency_id')).then((result) => {
            this.loading.dismiss();
            this.agancy_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
  getAllAgencyType(){
   this.showLoader();
            this.authService.getAllAgencyType().then((result) => {
            this.loading.dismiss();
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

   showModalDialog(req_data) {
       var data = {
            id: req_data.id,
            code: req_data.code,
            name: req_data.name,
            full_name: req_data.full_name,
            address: req_data.address,
            pin_code: req_data.pin_code,
            country: req_data.country,
            state: req_data.state,
            district: req_data.district,
            city: req_data.city,
            contact_no: req_data.contact_no,
            email: req_data.email,
            web_site: req_data.web_site,
            company: req_data.company
           
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(AgencyAllListDetilsPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
      editAgency(agency_data) {
      
            var data = agency_data;
            var AgencyPagemodalPage = this.modalCtrl.create('AgencyRequestPage', data);
            AgencyPagemodalPage.onDidDismiss(() => {
               // this.getEmployeePlanList();
            });
            AgencyPagemodalPage.present();
       
    }
      showModal(cof) {
         let data = { id: cof.id}
           var DetailsmodalPage = this.modalCtrl.create('AgencyDetailsPage', data);
       
       DetailsmodalPage.onDidDismiss(() => {
           // this.geteventdetails();
        });
        DetailsmodalPage.present();
    }
    showAgencyRequest(){
     var MemberRequestPagemodalPage = this.modalCtrl.create('AgencyRequestPage');
      
       
        MemberRequestPagemodalPage.onDidDismiss(data => {
         
          this.parent = this.navParams.get('parent');
              if (this.parent == 'Agency') {
     
             this.getagencydetails();
        }
        else {
        
            this.getAllAgencyType();
        
    }
           
        });
        MemberRequestPagemodalPage.present();
    
    }
     cancelAgencyRequest(agency_req_id) {
       // this.showLoader();
        this.authService.cancelAgencyRequest(agency_req_id).then((result) => {
            //this.loading.dismiss();

             this.parent = this.navParams.get('parent');
              if (this.parent == 'Agency') {
     
             this.getagencydetails();
        }
        else {
        
            this.getAllAgencyType();
        
    }
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
      presentConfirm(agency_req_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelAgencyRequest(agency_req_id);
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
