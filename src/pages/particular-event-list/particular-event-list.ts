import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { EventAllListDetailsPage } from '../event-all-list-details/event-all-list-details';


import moment from 'moment';

/**
 * Generated class for the ParticularEventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-particular-event-list',
  templateUrl: 'particular-event-list.html',
})
export class ParticularEventListPage {

  loading: any;
  member_data: any;
  date_Max1: any;
    //selectedDate1: String;
    date_Min: Date = new Date();
    date_Max: Date = new Date();
    selectedDate: Date = new Date();
    selectedDate1: Date = new Date();

  //  event_detail_id: any;
    count_data: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  
   //this.date_Max1 = ((new Date()).getFullYear() + 5).toString();
        //this.selectedDate1 = new Date().toISOString();
        this.selectedDate = new Date();
        this.selectedDate1 = new Date();
        this.date_Min.setMonth(0, 1);
        this.date_Max.setFullYear((new Date()).getFullYear() + 5);
        
  }

  ionViewDidLoad() {
   this.geteventdetails();
    
  }
  dateChanged() {
        this.geteventdetails();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    setDate1(date: Date) {
        this.selectedDate1 = date;
        this.dateChanged();
    }
  geteventdetails(){
   this.showLoader();
            this.authService.geteventdetails(localStorage.getItem('agent_id'), moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.member_data = result;
            
            // this.getcountdetails();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     
    
   // geteventcomplete2(event_detail_id){
    //  this.showLoader();
        //    this.authService.geteventcomplete(event_detail_id).then((result) => {
        //    this.loading.dismiss();
        //     this.geteventdetails();
    
      //  }, (err) => {
       //     this.loading.dismiss();
       //     let errJson = err.json();
       //     this.presentToast(errJson.message);
       // });

   // }
     // presentConfirm(event_detail_id) {
      //  const alert = this.alertCtrl.create({
        //    title: 'Confirmation',
         //   message: 'Are you sure?',
         //   buttons: [
           //     {
               //     text: 'Ok',
              //      handler: () => {
                //        console.log('Ok clicked');
                  //      console.log('Ok clicked');
                       
                     //       this.geteventcomplete(event_detail_id);
                      
                     //   }
               // },
               // {
                  //  text: 'Cancel',
                  //  role: 'cancel',
                  //  handler: () => {
                   //     console.log('Cancel clicked');
                  //  }
               // }
           // ]
       // });
       // alert.present();
   // }
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
            description: req_data.description,
            event_type: req_data.event_type,
            event_date: req_data.event_date,
            place: req_data.place,
            //address: req_data.address,
            //pin_code: req_data.pin_code,
            //country: req_data.country,
            town: req_data.town,
            village: req_data.village,
            secondary_cell: req_data.secondary_cell,
            city_id: req_data.city_id,
            agent: req_data.agent,
            event_status: req_data.event_status,
            agent_id: req_data.agent_id
            
        }
       
        var DetailsmodalPage = this.modalCtrl.create('EventAllListDetailsPage', data);
          DetailsmodalPage.onDidDismiss(() => {
            this.geteventdetails();
        });
        DetailsmodalPage.present();
    }
   

    showNewEventRequest(){
      var EventRequestPagemodalPage = this.modalCtrl.create('PurticularEventDetailsRequestPage');
      
       
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.geteventdetails();
    
           
        });
        EventRequestPagemodalPage.present();
}
    cancelEventRequest(event_req_id) {
       // this.showLoader();
        this.authService.cancelEventRequest(event_req_id).then((result) => {
            //this.loading.dismiss();

            this.geteventdetails();
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
                        this.cancelEventRequest(event_req_id);
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
