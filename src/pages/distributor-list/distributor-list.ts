import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorDetailsPage } from '../distributor-details/distributor-details';


/**
 * Generated class for the DistributorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distributor-list',
  templateUrl: 'distributor-list.html',
})
export class DistributorListPage {

   loading: any;
   distributor_data: any;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getdistributorlist();
        
  }

  ionViewDidLoad() {
   
  }
  getdistributorlist(){
   this.showLoader();
            this.authService.getdistributorlist().then((result) => {
            this.loading.dismiss();
            this.distributor_data = result;
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

  
     
 
    showDistributorRequest(){
     var MemberRequestPagemodalPage = this.modalCtrl.create('DistributorPage');
      
       
        MemberRequestPagemodalPage.onDidDismiss(data => {
        
            this.getdistributorlist();  
        });
        MemberRequestPagemodalPage.present();
    
    }
    showModalDialog(req_data) {
       var data = {
            id: req_data.id,
            name: req_data.name,
            description: req_data.description,
            area: req_data.area,
            address: req_data.address,
            distributor_type: req_data.distributor_type,
            status: req_data.status,
            agency: req_data.agency
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(DistributorDetailsPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
     cancelDistributorRequest(distributor_req_id) {
       // this.showLoader();
        this.authService.cancelDistributorRequest(distributor_req_id).then((result) => {
            //this.loading.dismiss();

            this.getdistributorlist();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     presentConfirm(distributor_req_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelDistributorRequest(distributor_req_id);
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
