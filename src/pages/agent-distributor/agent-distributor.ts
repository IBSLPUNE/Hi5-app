import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController, ModalController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the AgentDistributorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-distributor',
  templateUrl: 'agent-distributor.html',
})
export class AgentDistributorPage {
  loading: any;

   Name: any;
   Area: string = '';
   Description: string = '';
   Address: string = '';
   MobNumber: string = '';

   street_root_data: Array<{ value: string, text: string }> = [];
   street_root: any;
   streetroot: any;

   sub_distributor_data: any;
   distributor_id: any;

   root_wise_data: any;

   DistributorReq = {agent_id: '', distributor_id: '',  name: '', area: '', description: '', address: '' , status: true, mob_number: '', street_root: ''}

   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController, private modalCtrl: ModalController) {
   this.distributor_id = this.navParams.get('id');
   this.getRootType();
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
    if (this.MobNumber != '') {
     console.log(this.MobNumber);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentDistributorPage');
  }
    getRootType() {
        //this.showLoader();
        this.authService.getRootType(this.distributor_id).then((result) => {
           // this.loading.dismiss();

            this.streetroot = result;

            this.street_root_data.push({ value: '', text: 'Select Street Root' });

            for (let i = 0; i < this.streetroot.length; i++) {
                this.street_root_data.push({ value: this.streetroot[i].id, text: this.streetroot[i].street_root });
            }

            this.street_root = { text: 'Select Street Root', value: '' };
            this.getDistributorWiseRoot();
     
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getDistributorWiseRoot(){
        this.showLoader();
            this.authService.getDistributorWiseRoot(this.distributor_id).then((result) => {
            this.loading.dismiss();
            this.root_wise_data = result;
            this.getRootWiseSubDistributor();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    saveAgentWiseDistributorData(){
      if (this.street_root.value == '') {
             this.showAlert('Message', 'Please Select Street Root.');
            return;
      }
      if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
      }
      if (this.MobNumber == '') {
             this.showAlert('Message', 'Mobile Number is Mandatory.');
            return;
      }
      this.showLoader();

             this.DistributorReq.distributor_id = this.navParams.get('id');
             this.DistributorReq.name = this.Name;
             this.DistributorReq.area = this.Area;
             this.DistributorReq.description = this.Description;
             this.DistributorReq.address = this.Address;
             this.DistributorReq.mob_number = this.MobNumber;
             this.DistributorReq.street_root = this.street_root.value;
             this.DistributorReq.status = true;
             this.DistributorReq.agent_id = localStorage.getItem('agent_id');

      
             this.authService.saveAgentWiseDistributorData(this.DistributorReq).then((result) => {
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
    getRootWiseSubDistributor(){
        this.showLoader();
            this.authService.getRootWiseSubDistributor(this.distributor_id).then((result) => {
            this.loading.dismiss();
            this.sub_distributor_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    showModalDialog(req_data){
        var data = {
            id: req_data.id,
            distributor: req_data.distributor,
            name: req_data.name,
            description: req_data.description,
            area: req_data.area,
            address: req_data.address,
            status: req_data.status,
            mobile_number: req_data.mobile_number ,
            street_root: req_data.street_root  
        };
        var DetailsmodalPage = this.modalCtrl.create('AgentDistributorDetailPage', data);
        DetailsmodalPage.present();

    }
}

