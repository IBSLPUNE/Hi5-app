import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the DistributorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distributor',
  templateUrl: 'distributor.html',
})
export class DistributorPage {

   loading: any;

   agency_type_data: Array<{ value: string, text: string }> = [];
   agency_type: any;
   agencytype: any;

   Name: any;
   Area: string = '';
   Distributortype: string = '';
   Description: string = '';
   Address: string = '';
   
   DistributorReq = { agency_type: '', name: '', area: '', distributortype: '', description: '', address: '', status:true}

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
  this.getAgency();
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
    if (this.Distributortype != '') {
     console.log(this.Distributortype);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistributorPage');
  }
   getAgency() {
      //  this.showLoader();
        this.authService.getAgency().then((result) => {
         //   this.loading.dismiss();

            this.agencytype = result;

            this.agency_type_data.push({ value: '', text: 'Select SO' });

            for (let i = 0; i < this.agencytype.length; i++) {
                this.agency_type_data.push({ value: this.agencytype[i].id, text: this.agencytype[i].name });
            }

            this.agency_type = { text: 'Select SO', value: '' };

           //this.getAllEventType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    saveDistributorData(){
      if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
      } 
      if (this.agency_type.value == '') {
             this.showAlert('Message', 'Please Select SO Name.');
            return;
      }
      this.showLoader();
       
        this.DistributorReq.name = this.Name;
        this.DistributorReq.area = this.Area;
        this.DistributorReq.distributortype = this.Distributortype;
        this.DistributorReq.description = this.Description;
        this.DistributorReq.address = this.Address;
        this.DistributorReq.agency_type = this.agency_type.value;
        this.DistributorReq.status = true;
  
     
        this.authService.saveDistributorData(this.DistributorReq).then((result) => {
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
