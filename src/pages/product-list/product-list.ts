import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ProductDetailPage } from '../product-detail/product-detail';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
   loading: any;
   product_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
   this.getproductlist();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductListPage');
  }
   getproductlist(){
   this.showLoader();
            this.authService.getproductlist().then((result) => {
            this.loading.dismiss();
            this.product_data = result;
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
    showProductRequest(){
     var ProductRequestPagemodalPage = this.modalCtrl.create('ProductPage');
      
       
        ProductRequestPagemodalPage.onDidDismiss(data => {
        
            this.getproductlist();  
        });
        ProductRequestPagemodalPage.present();
    
    }
    showModalDialog(req_data) {
       var data = {
            id: req_data.id,
            code:req_data.code, 
            name: req_data.name,
            description: req_data.description,
            status: req_data.status,
            price: req_data.price
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(ProductDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
    cancelProductRequest(product_id) {
       // this.showLoader();
        this.authService.cancelProductRequest(product_id).then((result) => {
            //this.loading.dismiss();

            this.getproductlist();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    presentConfirm(product_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelProductRequest(product_id);
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
