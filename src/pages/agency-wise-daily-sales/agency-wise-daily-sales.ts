import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the AgencyWiseDailySalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-wise-daily-sales',
  templateUrl: 'agency-wise-daily-sales.html',
})
export class AgencyWiseDailySalesPage {
  loading: any;

   distributor_type_data: Array<{ value: string, text: string }> = [];
   distributor_type: any;
   distributortype: any;

   sub_distributor_type_data: Array<{ value: string, text: string }> = [];
   sub_distributor_type: any;
   subdistributortype: any;

   product_type_data: Array<{ value: string, text: string }> = [];
   product_type: any;
   producttype: any;

   street_root_data: Array<{ value: string, text: string }> = [];
   street_root: any;
   streetroot: any;

   scheme_type_data: Array<{ value: string, text: string }> = [];
   scheme_type: any;
   schemetype: any;

   Name: string = '';
   Area: string = '';
   Description: string = '';
   Address: string = '';
   PrimarySell: string = '';
   SecondarySell: string = '';
   
   select_sale_type: any;
   select_sale_type_data: any;
    lTType: boolean;

     sale_data: any;

   member_type_data: Array<{ value: string, text: string }> = [];
   agent_id: any;
   membertype: any;


   AgentdistributorReq = {agent_id: '', distributor_type: '', sub_distributor_type: '', select_sale_type: '', primary_sell: '', seconary_sell: '', current_date: '', status: true, product_type: '', description: '', street_root: '', scheme_type: ''}

   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController, private modalCtrl: ModalController) {
         this.getmemberdetails();
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
        this.getSOWiseDistributor();
    this.select_sale_type_data = [
            { text: 'Select Sale Type', value: '' },
            { text: 'Primary Sale', value: 'PrimarySale' },  
            { text: 'Secondary Sale', value: 'SecondarySale' }
            
        ];
        this.select_sale_type = { text: 'Select Sale Type', value: '' };

  }
   onLTChange() {
        if (this.select_sale_type.value == 'PrimarySale') {
          
            this.lTType = false;
        }
        if (this.select_sale_type.value == 'SecondarySale') {
          
            this.lTType = true;
        }
        else {
            this.lTType = false;
        }
        
    }
    getSOWiseDistributor() {
       // this.showLoader();
        this.authService.getSOWiseDistributor(localStorage.getItem('agency_id')).then((result) => {
           // this.loading.dismiss();

            this.distributortype = result;

            this.distributor_type_data.push({ value: '', text: 'Select Distributor' });

            for (let i = 0; i < this.distributortype.length; i++) {
                this.distributor_type_data.push({ value: this.distributortype[i].id, text: this.distributortype[i].name });
            }

            this.distributor_type = { text: 'Select Distributor', value: '' };
           //this.getmemberData();
       
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
      }
      getRootType() {
        //this.showLoader();
        this.authService.getRootType(this.distributor_type.value).then((result) => {
           // this.loading.dismiss();

            this.streetroot = result;

            this.street_root_data.push({ value: '', text: 'Select Street Root' });

            for (let i = 0; i < this.streetroot.length; i++) {
                this.street_root_data.push({ value: this.streetroot[i].id, text: this.streetroot[i].street_root });
            }

            this.street_root = { text: 'Select Street Root', value: '' };
            
     
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
      }
      getSubDistributorType() {
        //this.showLoader();
        this.authService.getSubDistributorType(this.street_root.value).then((result) => {
           // this.loading.dismiss();

            this.subdistributortype = result;

            this.sub_distributor_type_data.push({ value: '', text: 'Select Retailer' });

            for (let i = 0; i < this.subdistributortype.length; i++) {
                this.sub_distributor_type_data.push({ value: this.subdistributortype[i].id, text: this.subdistributortype[i].name });
            }

            this.sub_distributor_type = { text: 'Select Retailer', value: '' };
     
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
     // getReportingWiseDateWiseSale(){
      //  this.showLoader();
      //      this.authService.getReportingWiseDateWiseSale(this.agent_id.value,localStorage.getItem('reporting_id')).then((result) => {
      //      this.loading.dismiss();
      //      this.sale_data = result;
     //      this.getproductlist();
     //   }, (err) => {
     //       this.loading.dismiss();
     //       let errJson = err.json();
     //       this.presentToast(errJson.message);
     //   });
   // }
     getmemberdetails() {
       // this.showLoader();
        this.authService.getmemberdetails(localStorage.getItem('reporting_id')).then((result) => {
           // this.loading.dismiss();

            this.membertype = result;

            this.member_type_data.push({ value: '', text: 'Select SR' });

            for (let i = 0; i < this.membertype.length; i++) {
                this.member_type_data.push({ value: this.membertype[i].id, text: this.membertype[i].first_name + ' ' + this.membertype[i].last_name });
            }

            this.agent_id = { text: 'Select SR', value: '' };

           // this.getReportingWiseDateWiseSale();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getmemberData() {
       // this.showLoader();
        this.authService.getmemberData(localStorage.getItem('agent_id')).then((result) => {
           // this.loading.dismiss();

            this.membertype = result;

            this.member_type_data.push({ value: '', text: 'Select SR' });

            for (let i = 0; i < this.membertype.length; i++) {
                this.member_type_data.push({ value: this.membertype[i].id, text: this.membertype[i].first_name + ' ' + this.membertype[i].last_name });
            }

            this.agent_id = { text: 'Select SR', value: '' };

           // this.getReportingWiseDateWiseSale();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
      saveAgencyDailySalesRequest(){
        if (this.select_sale_type.value == '') {
             this.showAlert('Message', 'Please Select Sale Type.');
            return;
        }
        if (this.distributor_type.value == '') {
             this.showAlert('Message', 'Please Select Distributor Name.');
            return;
        }
         if (this.street_root.value == '') {
             this.showAlert('Message', 'Please Select Street Root.');
            return;
        }
        if (this.sub_distributor_type.value == '') {
             this.showAlert('Message', 'Please Select Retailer Name.');
            return;
        } 
        if (this.product_type.value == '') {
             this.showAlert('Message', 'Please Select Product Name.');
            return;
        }
      
        //this.showLoader();
        var now = new Date();
        this.AgentdistributorReq.select_sale_type = this.select_sale_type.value;
        this.AgentdistributorReq.distributor_type = this.distributor_type.value;
        this.AgentdistributorReq.sub_distributor_type = this.sub_distributor_type.value;
        this.AgentdistributorReq.street_root = this.street_root.value;
        this.AgentdistributorReq.product_type = this.product_type.value;
        this.AgentdistributorReq.scheme_type = this.scheme_type.value;
        this.AgentdistributorReq.primary_sell = this.PrimarySell;
        this.AgentdistributorReq.seconary_sell = this.SecondarySell;
        this.AgentdistributorReq.current_date = moment(now).format('YYYY-MM-DD');
        this.AgentdistributorReq.agent_id = this.agent_id.value;
        this.AgentdistributorReq.status = true;
        this.AgentdistributorReq.description = this.Description;
 
        this.authService.saveAgencyDailySalesRequest(this.AgentdistributorReq).then((result) => {
           // this.loading.dismiss();
            this.sale_data = result;
            this.showAlert('Success', 'Daily sales created.');
             
             this.select_sale_type ='';
             this.distributor_type ='';
             this.sub_distributor_type ='';
             this.street_root ='';
             this.scheme_type ='';
             this.product_type ='';
             this.PrimarySell ='';
             this.SecondarySell ='';
             this.Description ='';
            // this.getReportingWiseDateWiseSale();
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
      showModalDialog(req_data){
        var data = {
            id: req_data.id,
            distributor: req_data.distributor,
            sub_distributor: req_data.sub_distributor,
            street_root_id: req_data.street_root_id,
            date: req_data.date,
            agent_id: req_data.agent_id,
            sale_completed: req_data.sale_completed
        }
        var MemberRequestPagemodalPage = this.modalCtrl.create('DailySalesProductListPage', data);
        MemberRequestPagemodalPage.onDidDismiss(data => {
         // this.getReportingWiseDateWiseSale();
        });
        MemberRequestPagemodalPage.present();
       }
}
