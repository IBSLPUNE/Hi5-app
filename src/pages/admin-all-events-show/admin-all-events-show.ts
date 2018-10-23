import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
import { AdminAllEventDetailPage } from '../admin-all-event-detail/admin-all-event-detail';


/**
 * Generated class for the AdminAllEventsShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-all-events-show',
  templateUrl: 'admin-all-events-show.html',
})
export class AdminAllEventsShowPage {

 loading: any;
 contact_data: any;
 date_Max1: any;
    //selectedDate1: String;
    date_Min: Date = new Date();
    date_Max: Date = new Date();
    selectedDate: Date = new Date();
    selectedDate1: Date = new Date();
    p: number[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.getAdminAllEventContactList();
   //this.date_Max1 = ((new Date()).getFullYear() + 5).toString();
        //this.selectedDate1 = new Date().toISOString();
        this.selectedDate = new Date();
        this.selectedDate1 = new Date();
        this.date_Min.setMonth(0, 1);
        this.date_Max.setFullYear((new Date()).getFullYear() + 5);
        
  }
     compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }

  ionViewDidLoad() {
  }
  dateChanged() {
        this.getAdminAllEventContactList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    setDate1(date: Date) {
        this.selectedDate1 = date;
        this.dateChanged();
    }
  getAdminAllEventContactList(){
   this.showLoader();
            this.authService.getAdminAllEventContactList(moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.contact_data = result;
            
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
            contact_no: req_data.contact_no,
            gender: req_data.gender,
            agent_first_name: req_data.agent_first_name,
            agent_last_name: req_data.agent_last_name,
            event_detail_name: req_data.event_detail_name,
            event_detail_type: req_data.event_detail_type,
            event_detail_date: req_data.event_detail_date
        };
       
        var DetailsmodalPage = this.popoverCtrl.create(AdminAllEventDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();

   }
   

}
