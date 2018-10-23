import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { SchemeDetailPage } from '../scheme-detail/scheme-detail';

/**
 * Generated class for the SchemeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheme-list',
  templateUrl: 'scheme-list.html',
})
export class SchemeListPage {

  loading: any;
   scheme_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getAllScheme();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchemeListPage');
  }
   showProductRequest(){
     var ProductRequestPagemodalPage = this.modalCtrl.create('SchemePage');
      
       
        ProductRequestPagemodalPage.onDidDismiss(data => {
        
            this.getAllScheme();  
        });
        ProductRequestPagemodalPage.present();
    
    }
    getAllScheme(){
      this.showLoader();
            this.authService.getAllScheme().then((result) => {
            this.loading.dismiss();
            this.scheme_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });

    }
     showModalDialog(req_data) {
       var data = {
            id: req_data.id,
            product:req_data.product, 
            name: req_data.name,
            from_date: req_data.from_date,
            to_date: req_data.to_date,
            status: req_data.status,
            discount: req_data.discount,
            scheme_type: req_data.scheme_type
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(SchemeDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
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
    cancelSchemeRequest(scheme_id) {
       // this.showLoader();
        this.authService.cancelSchemeRequest(scheme_id).then((result) => {
            //this.loading.dismiss();

            this.getAllScheme();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(scheme_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelSchemeRequest(scheme_id);
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
