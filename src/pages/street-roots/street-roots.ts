import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the StreetRootsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-street-roots',
  templateUrl: 'street-roots.html',
})
export class StreetRootsPage {

   loading: any;

   distributor_type_data: Array<{ value: string, text: string }> = [];
   distributor_type: any;
   distributortype: any;

   StreetRoot: any;
   Address: string = '';

   RootReq = { distributor_type: '', street_root: '', address: '', status: true}

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
  this.getdistributorlist();
  }
   textAreaEmpty(){
    if (this.Address != '') {
     console.log(this.Address);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StreetRootsPage');
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
    saveRootRequest(){
      if (this.distributor_type.value == '') {
             this.showAlert('Message', 'Please Select Distributor Name.');
            return;
      }
      if (this.StreetRoot == undefined) {
             this.showAlert('Message', 'StreetRoot is Mandatory.');
            return;
      }
      this.showLoader();
        this.RootReq.distributor_type = this.distributor_type.value;
        this.RootReq.street_root = this.StreetRoot;
        this.RootReq.address = this.Address;
        this.RootReq.status = true;

        this.authService.saveRootRequest(this.RootReq).then((result) => {
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
