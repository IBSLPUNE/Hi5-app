import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the SubDistributorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-distributor',
  templateUrl: 'sub-distributor.html',
})
export class SubDistributorPage {
  loading: any;

   distributor_type_data: Array<{ value: string, text: string }> = [];
   distributor_type: any;
   distributortype: any;

   street_root_data: Array<{ value: string, text: string }> = [];
   street_root: any;
   streetroot: any;

   Name: any;
   Area: string = '';
   Description: string = '';
   Address: string = '';
   mobileNo: string = '';
   
   DistributorReq = { agent_id: '', distributor_type: '', name: '', area: '', description: '', address: '', status:true, mobile_no: '', street_root: ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
  this.getdistributorlist();
  }
   textAreaEmpty(){
    if (this.Area != '') {
     console.log(this.Area);
    }
    if (this.Description != '') {
     console.log(this.Description);
    }
    if (this.Address != '') {
     console.log(this.Address);
    }
    if (this.mobileNo != '') {
     console.log(this.mobileNo);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistributorPage');
  }
   getdistributorlist() {
      //  this.showLoader();
        this.authService.getdistributorlist().then((result) => {
         //   this.loading.dismiss();

            this.distributortype = result;

            this.distributor_type_data.push({ value: '', text: 'Select Distributor' });

            for (let i = 0; i < this.distributortype.length; i++) {
                this.distributor_type_data.push({ value: this.distributortype[i].id, text: this.distributortype[i].name });
            }

            this.distributor_type = { text: 'Select Distributor', value: '' };

           //this.getAllEventType();
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
   saveSubDistributorData(){
      if (this.distributor_type.value == '') {
             this.showAlert('Message', 'Please Select Distributor Name.');
            return;
      }
      if (this.street_root.value == '') {
             this.showAlert('Message', 'Please Select Street Root.');
            return;
      }
      if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
      }
      if (this.mobileNo == '') {
             this.showAlert('Message', 'Mobile Number is Mandatory.');
            return;
      }
     this.showLoader();
       
        this.DistributorReq.distributor_type = this.distributor_type.value;
        this.DistributorReq.name = this.Name;
        this.DistributorReq.area = this.Area;
        this.DistributorReq.description = this.Description;
        this.DistributorReq.address = this.Address;
        this.DistributorReq.mobile_no = this.mobileNo;
        this.DistributorReq.street_root = this.street_root.value;
        this.DistributorReq.status = true;
        this.DistributorReq.agent_id = localStorage.getItem('agent_id');

        this.authService.saveSubDistributorData(this.DistributorReq).then((result) => {
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
     compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
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
