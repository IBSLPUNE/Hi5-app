import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { StreetRootDetailPage } from '../street-root-detail/street-root-detail';


/**
 * Generated class for the StreetRootListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-street-root-list',
  templateUrl: 'street-root-list.html',
})
export class StreetRootListPage {

  loading: any;
   root_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
   this.getRootlist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
   getRootlist(){
   this.showLoader();
            this.authService.getRootlist().then((result) => {
            this.loading.dismiss();
            this.root_data = result;
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
    showStreetRequest(){
     var StreetRequestPagemodalPage = this.modalCtrl.create('StreetRootsPage');
      
       
        StreetRequestPagemodalPage.onDidDismiss(data => {
        
            this.getRootlist();  
        });
        StreetRequestPagemodalPage.present();
    
    }
    showModalDialog(req_data) {
       var data = {
            id: req_data.id,
            distributor:req_data.distributor, 
            street_root: req_data.street_root,
            address: req_data.address,
            status: req_data.status
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(StreetRootDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
    cancelRootRequest(root_id) {
       // this.showLoader();
        this.authService.cancelRootRequest(root_id).then((result) => {
            //this.loading.dismiss();

            this.getRootlist();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(root_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelRootRequest(root_id);
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
