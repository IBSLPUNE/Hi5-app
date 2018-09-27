import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DistributorDetailsPage } from '../distributor-details/distributor-details';

/**
 * Generated class for the AgentDistributorListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-distributor-list',
  templateUrl: 'agent-distributor-list.html',
})
export class AgentDistributorListPage {

  loading: any;
   distributor_data: any;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getagentwisedistributorlist();
        
  }

  ionViewDidLoad() {
   
  }
  getagentwisedistributorlist(){
   //this.showLoader();
            this.authService.getagentwisedistributorlist(localStorage.getItem('agent_id')).then((result) => {
           // this.loading.dismiss();
            this.distributor_data = result;
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
    showModalDialog(req_data){
      var data = {
            id: req_data.id
            }
     var MemberRequestPagemodalPage = this.modalCtrl.create('AgentDistributorPage', data);
      
       
        MemberRequestPagemodalPage.onDidDismiss(data => {
        
            this.getagentwisedistributorlist();  
        });
        MemberRequestPagemodalPage.present();
    
    }
    showModal(req_data) {
       var data = {
            id: req_data.id,
            name: req_data.name,
            description: req_data.description,
            area: req_data.area,
            address: req_data.address,
            distributor_type: req_data.distributor_type,
            status: req_data.status,
            agency: req_data.agency
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(DistributorDetailsPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
}
