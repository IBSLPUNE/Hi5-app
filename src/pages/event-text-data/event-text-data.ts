import { Component } from '@angular/core';
import { IonicPage, AlertController, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the EventTextDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-text-data',
  templateUrl: 'event-text-data.html',
})
export class EventTextDataPage {

   loading;
   text: any;


     taxt_data = { id: '', text: '' };

   constructor(public navCtrl: NavController, private alertCtrl: AlertController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventTextDataPage');
  }

   saveTextData() {
        if (this.text == undefined) {
           this.presentToast('Text is Mandatory');
           return;
       }
        this.showLoader();
        this.taxt_data.id = this.navParams.get("id");
        this.taxt_data.text = this.text;
        this.authService.saveTextData(this.taxt_data).then((result) => {
            this.loading.dismiss();
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
    public closeModal(){
		this.viewCtrl.dismiss();
	}


}
