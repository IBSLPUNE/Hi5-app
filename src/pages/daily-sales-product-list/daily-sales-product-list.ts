import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the DailySalesProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-sales-product-list',
  templateUrl: 'daily-sales-product-list.html',
})
export class DailySalesProductListPage {

  loading: any;


   product_type_data: Array<{ value: string, text: string }> = [];
   product_type: any;
   producttype: any;

   scheme_type_data: Array<{ value: string, text: string }> = [];
   scheme_type: any;
   schemetype: any;

   Name: string = '';
   Area: string = '';
   Description: string = '';
   Address: string = '';
   PrimarySell: string = '';
   SecondarySell: string = '';

   distributor_type: any;
   sub_distributor_type: any;
   street_root: any;
   current_date: any;
   agent_id: any;
   sale_completed: any;

   root_wise_data: any;

   AgentdistributorReq = {agent_id: '', distributor_type: '', sub_distributor_type: '', name: '', area: '', description: '', 
   address: '', primary_sell: '', seconary_sell: '', current_date: '', status: true, product_type: '', street_root: '', scheme_type: ''}


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
    this.distributor_type = this.navParams.get('distributor');
    this.sub_distributor_type = this.navParams.get('sub_distributor');
    this.street_root = this.navParams.get('street_root_id');
    this.current_date = this.navParams.get('date');
    this.agent_id = this.navParams.get('agent_id');
    this.sale_completed =this.navParams.get('sale_completed');
      this.getProductWiseList();
  }
  textAreaEmpty(){
    if (this.Name != '') {
     console.log(this.Name);
    }
    if (this.Area != '') {
     console.log(this.Area);
    }
    if (this.Description != '') {
     console.log(this.Description);
    }
     if (this.Address != '') {
     console.log(this.Address);
    }
    if (this.PrimarySell != '') {
     console.log(this.PrimarySell);
    }
    if (this.SecondarySell != '') {
     console.log(this.SecondarySell);
    }
  }

  ionViewDidLoad() {
     this.getproductlist();
  }
     getProductWiseList(){
        this.showLoader();
            this.authService.getProductWiseList(this.agent_id,this.sub_distributor_type,this.current_date).then((result) => {
            this.loading.dismiss();
            this.root_wise_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
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
     getSchemeType() {
        //this.showLoader();
        this.authService.getSchemeType(this.product_type.value).then((result) => {
           // this.loading.dismiss();

            this.schemetype = result;

            this.scheme_type_data.push({ value: '', text: 'Select Scheme' });

            for (let i = 0; i < this.schemetype.length; i++) {
                this.scheme_type_data.push({ value: this.schemetype[i].id, text: this.schemetype[i].name });
            }

            this.scheme_type = { text: 'Select Scheme', value: '' };
           
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
 
     compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
      saveDisributorRequest(){

        if (this.product_type.value == '') {
             this.showAlert('Message', 'Please Select Product Name.');
            return;
        }
        
        this.AgentdistributorReq.distributor_type = this.navParams.get('distributor');
        this.AgentdistributorReq.sub_distributor_type = this.navParams.get('sub_distributor');
        this.AgentdistributorReq.street_root = this.navParams.get('street_root_id');
        this.AgentdistributorReq.current_date = this.navParams.get('date');
        this.AgentdistributorReq.name = this.Name;
        this.AgentdistributorReq.area = this.Area;
        this.AgentdistributorReq.description = this.Description;
        this.AgentdistributorReq.address = this.Address;
        this.AgentdistributorReq.product_type = this.product_type.value;
        this.AgentdistributorReq.scheme_type = this.scheme_type.value;
        this.AgentdistributorReq.primary_sell = this.PrimarySell;
        this.AgentdistributorReq.seconary_sell = this.SecondarySell;
        this.AgentdistributorReq.agent_id = this.navParams.get('agent_id');
        this.AgentdistributorReq.status = true;
      

 
        this.authService.saveDisributorRequest(this.AgentdistributorReq).then((result) => {
           // this.loading.dismiss();
                this.showAlert('success', 'Product Created.');

                   this.scheme_type ='';
                   this.product_type ='';
                   this.PrimarySell ='';
                   this.SecondarySell ='';
                   this.Description ='';

                   this.getProductWiseList();

            }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });

    }
    endSale(){

        this.AgentdistributorReq.distributor_type = this.navParams.get('distributor');
        this.AgentdistributorReq.sub_distributor_type = this.navParams.get('sub_distributor');
        this.AgentdistributorReq.street_root = this.navParams.get('street_root_id');
        this.AgentdistributorReq.current_date = this.navParams.get('date');
        this.AgentdistributorReq.agent_id = this.navParams.get('agent_id');
       
        this.authService.endSale(this.AgentdistributorReq).then((result) => {
           // this.loading.dismiss();
           
               this.showAlert('Success', 'Sale Ended.');
                 this.closeModal();
          
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
     public closeModal() {

        this.viewCtrl.dismiss();
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
