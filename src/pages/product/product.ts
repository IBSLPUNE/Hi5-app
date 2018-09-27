import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {
  loading: any;
  code: string = '';
  name: any;
  description: string = '';
  price: string = '';

 
   productData = {  code: '', name: '', description: '', status:true, price: '' }

constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public viewCtrl: ViewController) {
    }
    textAreaEmpty(){
    if (this.code != '') {
     console.log(this.code);
    }
    if (this.description != '') {
     console.log(this.description);
    }
    if (this.price != '') {
     console.log(this.price);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }
  saveProductRequest(){

        if (this.name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }
        if (this.price == '') {
             this.showAlert('Message', 'Price is Mandatory.');
            return;
        }
    
        this.showLoader();

       
        this.productData.code = this.code;
        this.productData.name = this.name;
        this.productData.description = this.description;
        this.productData.price = this.price;
        this.productData.status = true;

        
        this.authService.saveProductRequest(this.productData).then((result) => {
            this.loading.dismiss();
                if (result["status"].toLowerCase().indexOf('success') >= 0) {
                this.showAlert('success', result["status"]);
                 this.closeModal();
                } 
                else
                {
                this.showAlert('success', result["status"]);
                }
                
          }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     public closeModal() {

        this.viewCtrl.dismiss();
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

    showAlert(title, text) {
        //this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    }
          
        

}
