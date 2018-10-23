import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the SchemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheme',
  templateUrl: 'scheme.html',
})
export class SchemePage {
    loading: any;

    from_date_Min: Date = new Date();
    from_date_Max: Date = new Date();
    fromDate: Date = new Date();

    to_date_Min: Date = new Date();
    to_date_Max: Date = new Date();
    toDate: Date = new Date();

    Date_Min: Date = new Date();
    Date_Max: Date = new Date();
    Date: Date = new Date();

   product_type_data: Array<{ value: string, text: string }> = [];
   product_type: any;
   producttype: any;

   name: any;
   discount: string = '';

   scheme_type: any;
   scheme_type_data: any;

   SchemeData = {  product_type: '', name: '', scheme_type: '', status:true, discount: '', from_date: '', to_date: ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public viewCtrl: ViewController) {
      this.getproductlist();

      this.fromDate = new Date();
        this.from_date_Min.setMonth(0, 1);
        this.from_date_Max.setFullYear((new Date()).getFullYear() + 5);

        this.toDate = new Date();
        this.to_date_Min.setMonth(0, 1);
        this.to_date_Max.setFullYear((new Date()).getFullYear() + 5);

        this.Date = new Date();
        this.Date_Min.setMonth(0, 1);
        this.Date_Max.setFullYear((new Date()).getFullYear() + 5);
  }
   textAreaEmpty(){
    if (this.discount != '') {
     console.log(this.discount);
    }
  }

  ionViewDidLoad() {
      this.scheme_type_data = [
            { text: 'Scheme Type', value: '' },
            { text: 'Offer-eg.2', value: 'Offer-eg.2' },  
            { text: 'Discount-eg.10%', value: 'Discount-eg.10%' },
            { text: 'N/A', value: 'N/A' }
            
        ];
         this.scheme_type = { text: 'Scheme Type', value: '' };
  }

   setDate(date: Date, sDate: string) {
        if (sDate == 'fromDt') {
            this.fromDate = date;
            this.toDate = date;
        }
        if (sDate == 'toDt') {
            this.toDate = date;
        }
        if (sDate == 'Dt') {
            this.Date = date;
        }
    }
   getproductlist() {
        //this.showLoader();
        this.authService.getproductlist().then((result) => {
           // this.loading.dismiss();

            this.producttype = result;

            this.product_type_data.push({ value: '', text: 'Select Product' });

            for (let i = 0; i < this.producttype.length; i++) {
                this.product_type_data.push({ value: this.producttype[i].id, text: this.producttype[i].name });
            }

            this.product_type = { text: 'Select Product', value: '' };
           
     
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
   SaveSchemeData() {
        if (this.product_type.value == '') {
             this.showAlert('Message', 'Please Select Product Name.');
            return;
        }
         if (this.name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }
      
       this.showLoader();   
        this.SchemeData.from_date = moment(this.fromDate.toString()).format('YYYY-MM-DD');
        this.SchemeData.to_date = moment(this.toDate.toString()).format('YYYY-MM-DD');
        this.SchemeData.product_type = this.product_type.value;
        this.SchemeData.name = this.name;
        this.SchemeData.scheme_type = this.scheme_type.value;
        this.SchemeData.discount = this.discount;
        this.SchemeData.status = true;
       
        this.authService.SaveSchemeData(this.SchemeData).then((result) => {
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
     compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }


}
