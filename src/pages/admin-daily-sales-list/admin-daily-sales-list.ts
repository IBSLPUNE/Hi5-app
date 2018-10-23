import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the AdminDailySalesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-daily-sales-list',
  templateUrl: 'admin-daily-sales-list.html',
})
export class AdminDailySalesListPage {

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
        this.getDailySalesList();
    }
    compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
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
      this.getAllAgentDetails();
    }
    getDailySalesList(){
       this.showLoader();
            this.authService.getDailySalesList(this.member_type.value, moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.daily_sales_data = result;
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getAllAgentDetails() {
       // this.showLoader();
        this.authService.getAllAgentDetails().then((result) => {
           // this.loading.dismiss();

            this.membertype = result;

            this.member_type_data.push({ value: '', text: 'Select SR' });

            for (let i = 0; i < this.membertype.length; i++) {
                this.member_type_data.push({ value: this.membertype[i].id, text: this.membertype[i].first_name + ' ' + this.membertype[i].last_name });
            }

            this.member_type = { text: 'Select SR', value: '' };

            this.getDailySalesList();
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
        var EventRequestPagemodalPage = this.modalCtrl.create('DailySaleDatewiseListPage', data);
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.getDailySalesList();  
        });
        EventRequestPagemodalPage.present();
    }
    showDailySlaesRequest(){
      var EventRequestPagemodalPage = this.modalCtrl.create('AgencyWiseDailySalesPage');
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.getDailySalesList();   
        });
        EventRequestPagemodalPage.present();
    }
}
