import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { ZoneSoDetailPage } from '../zone-so-detail/zone-so-detail';

/**
 * Generated class for the ZoneSoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-so-list',
  templateUrl: 'zone-so-list.html',
})
export class ZoneSoListPage {

   loading: any;
   agancy_data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
       this.getAllAgencyType();
    }

    ionViewDidLoad() {
    }
    getAllAgencyType(){
        this.showLoader();
            this.authService.getAllAgencyType().then((result) => {
            this.loading.dismiss();
            this.agancy_data = result;
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

    showModalDialog(req_data) {
       var data = {
              id: req_data.id,
              code: req_data.code,
              name: req_data.name,
              full_name: req_data.full_name,
              address: req_data.address,
              pin_code: req_data.pin_code,
              country: req_data.country,
              state: req_data.state,
              district: req_data.district,
              city: req_data.city,
              contact_no: req_data.contact_no,
              email: req_data.email,
              web_site: req_data.web_site,
              company: req_data.company
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(ZoneSoDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
    showZoneSORequest(){
        var MemberRequestPagemodalPage = this.modalCtrl.create('ZoneSoPage');
         MemberRequestPagemodalPage.onDidDismiss(data => {
             this.getAllAgencyType();
         });
        MemberRequestPagemodalPage.present();
    }
}
