import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController, PopoverController, ModalController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { EventTextDataPage } from '../event-text-data/event-text-data';
/**
 * Generated class for the ZoneEventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-event-detail',
  templateUrl: 'zone-event-detail.html',
})
export class ZoneEventDetailPage {

   loading: any;
 count_data: any;
 mobile_no_count: any;

  req_data = {
			id: '',
			code: '',
			name : '',
			description: '',
			event_type: '',
			event_date: '',
			place: '',
			town: '',
			village: '',
			secondary_cell: '',
			city_id: '',
			agent: '',
			event_status: '',
			agent_id: ''
			};
			
	 constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public viewCtrl: ViewController, public popoverCtrl: PopoverController, private modalCtrl: ModalController) {
	
	
	}

	ionViewDidLoad() {
		
		this.req_data.id = this.navParams.get('id');
	
		this.req_data.code = this.navParams.get('code');
		
		this.req_data.name = this.navParams.get('name');
		this.req_data.description = this.navParams.get('description');
		this.req_data.event_type = this.navParams.get('event_type');
		this.req_data.event_date = this.navParams.get('event_date');
		this.req_data.place = this.navParams.get('place');
		this.req_data.town = this.navParams.get('town');
		this.req_data.village = this.navParams.get('village');
		this.req_data.secondary_cell = this.navParams.get('secondary_cell');
		this.req_data.city_id = this.navParams.get('city_id');
		this.req_data.agent = this.navParams.get('agent');
        this.req_data.event_status = this.navParams.get('event_status');
        this.req_data.agent_id = this.navParams.get('agent_id');
		this.getcountdetails();
		
	}
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}
	getcountdetails(){
         this.showLoader();
            this.authService.getcountdetails(this.req_data.agent_id,this.req_data.id).then((result) => {
            this.loading.dismiss();
            this.count_data = result;
            this.mobile_no_count = this.count_data.mobile_no_count;

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
     showModal(req_data) {
         let data = {id: req_data.id}
           var DetailsmodalPage = this.modalCtrl.create('EventDetailsPage', data);
       
       DetailsmodalPage.onDidDismiss(() => {
            this.getcountdetails();
        });
        DetailsmodalPage.present();
    }
    
    ConfirmEvent(req_data){
     let data = {id: req_data.id}
           var DetailsmodalPage = this.popoverCtrl.create(EventTextDataPage, data, { cssClass: 'clsPopup' });
       
       DetailsmodalPage.onDidDismiss(() => {
        });
        DetailsmodalPage.present();

    }
     ConfirmEventRequest(event_req_id) {
       // this.showLoader();
        this.authService.ConfirmEventRequest(event_req_id).then((result) => {
            //this.loading.dismiss();
            this.closeModal();

        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     presentConfirm(event_req_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.ConfirmEventRequest(event_req_id);
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
