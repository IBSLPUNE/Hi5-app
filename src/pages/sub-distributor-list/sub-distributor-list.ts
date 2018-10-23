import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SubDistributorDetailsPage } from '../sub-distributor-details/sub-distributor-details';

/**
 * Generated class for the SubDistributorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-distributor-list',
  templateUrl: 'sub-distributor-list.html',
})
export class SubDistributorListPage {

   loading: any;
   sub_distributor_data: any;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getsubdistributorlist();
        
  }

  ionViewDidLoad() {
   
  }
  getsubdistributorlist(){
   this.showLoader();
            this.authService.getsubdistributorlist().then((result) => {
            this.loading.dismiss();
            this.sub_distributor_data = result;
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
    showSubDistributorRequest(){
     var MemberRequestPagemodalPage = this.modalCtrl.create('SubDistributorPage');
      
       
        MemberRequestPagemodalPage.onDidDismiss(data => {
        
            this.getsubdistributorlist();  
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
            distributor: req_data.distributor,
            status: req_data.status,
            agency: req_data.agency,
            mobile_number: req_data.mobile_number,
            root_id: req_data.root_id
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(SubDistributorDetailsPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
     cancelSubDistributorRequest(distributor_req_id) {
       // this.showLoader();
        this.authService.cancelSubDistributorRequest(distributor_req_id).then((result) => {
            //this.loading.dismiss();

            this.getsubdistributorlist();
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
                        this.cancelSubDistributorRequest(distributor_req_id);
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
