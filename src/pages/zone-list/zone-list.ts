import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ZoneDetailsPage } from '../zone-details/zone-details';
/**
 * Generated class for the ZoneListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-list',
  templateUrl: 'zone-list.html',
})
export class ZoneListPage {

   loading: any;
   zone_data: any;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getzonelist();
        
  }

  ionViewDidLoad() {
   
  }
  getzonelist(){
   this.showLoader();
            this.authService.getzonelist().then((result) => {
            this.loading.dismiss();
            this.zone_data = result;
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
    showZoneRequest(){
     var zoneRequestPagemodalPage = this.modalCtrl.create('ZonePage');
      
       
        zoneRequestPagemodalPage.onDidDismiss(data => {
        
            this.getzonelist();  
        });
        zoneRequestPagemodalPage.present();
    
    }
    showModalDialog(req_data) {
       var data = {
            id: req_data.id,
            code:req_data.code, 
            name: req_data.name,
            address: req_data.address,
            country_id: req_data.country_id,
            state_id: req_data.state_id,
            district_id: req_data.district_id,
            contact_no: req_data.contact_no,
            email: req_data.email,
            web_site: req_data.web_site,
            company_id: req_data.company_id,
            status: req_data.status,
            zone: req_data.zone
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(ZoneDetailsPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
     cancelZoneRequest(zone_id) {
       // this.showLoader();
        this.authService.cancelZoneRequest(zone_id).then((result) => {
            //this.loading.dismiss();

            this.getzonelist();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     presentConfirm(zone_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelZoneRequest(zone_id);
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
