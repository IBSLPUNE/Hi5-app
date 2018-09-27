import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';

/**
 * Generated class for the ZoneDailySaleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-daily-sale-list',
  templateUrl: 'zone-daily-sale-list.html',
})
export class ZoneDailySaleListPage {

   loading: any;
   daily_sales_data: any;

   date_Max1: any;
    date_Min: Date = new Date();
    date_Max: Date = new Date();
    selectedDate: Date = new Date();
    selectedDate1: Date = new Date();

    member_type_data: Array<{ value: string, text: string }> = [];
    member_type: any;
    membertype: any;

   
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
      this.selectedDate = new Date();
        this.selectedDate1 = new Date();
        this.date_Min.setMonth(0, 1);
        this.date_Max.setFullYear((new Date()).getFullYear() + 5);
  }
   dateChanged() {
        this.getAgencyDailySalesList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    setDate1(date: Date) {
        this.selectedDate1 = date;
        this.dateChanged();
    }

  ionViewDidLoad() {
    this.getmemberdetails();

  }
   compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
   getAgencyDailySalesList(){
   this.showLoader();
            this.authService.getAgencyDailySalesList(localStorage.getItem('reporting_id'), this.member_type.value, moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.daily_sales_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getmemberdetails() {
       // this.showLoader();
        this.authService.getmemberdetails(localStorage.getItem('reporting_id')).then((result) => {
           // this.loading.dismiss();

            this.membertype = result;

            this.member_type_data.push({ value: '', text: 'Select SR' });

            for (let i = 0; i < this.membertype.length; i++) {
                this.member_type_data.push({ value: this.membertype[i].id, text: this.membertype[i].first_name + ' ' + this.membertype[i].last_name });
            }

            this.member_type = { text: 'Select SR', value: '' };

            this.getAgencyDailySalesList();
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
    showModalDialog(dsd){
      var data = {id:dsd.id,
                 agent_id:dsd.agent_id,
                 date:dsd.date
                }

      var EventRequestPagemodalPage = this.modalCtrl.create('ZoneWiseDailySaleListPage', data);
      
       
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.getAgencyDailySalesList();
    
           
        });
        EventRequestPagemodalPage.present();
    }

    showDailySlaesRequest(){
      var EventRequestPagemodalPage = this.modalCtrl.create('ZoneDailySalePage');
      
       
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.getAgencyDailySalesList();
    
           
        });
        EventRequestPagemodalPage.present();
    }

}
