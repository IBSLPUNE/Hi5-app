import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ModalController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';


//import { DailySalesDetailsPage } from '../daily-sales-details/daily-sales-details';
/**
 * Generated class for the DailySalesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-sales-list',
  templateUrl: 'daily-sales-list.html',
})
export class DailySalesListPage {

   loading: any;
   daily_sales_data: any;

    date_Max1: any;
    date_Min: Date = new Date();
    date_Max: Date = new Date();
    selectedDate: Date = new Date();
    selectedDate1: Date = new Date();
   
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {

        this.selectedDate = new Date();
        this.selectedDate1 = new Date();
        this.date_Min.setMonth(0, 1);
        this.date_Max.setFullYear((new Date()).getFullYear() + 5);
        
  }
   dateChanged() {
        this.getDailySalesList();
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
      this.getDailySalesList();
  }
  getDailySalesList(){
   this.showLoader();
            this.authService.getDailySalesList(localStorage.getItem('agent_id'), moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.daily_sales_data = result;
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
                 date:dsd.date
                }

      var EventRequestPagemodalPage = this.modalCtrl.create('DailySaleDatewiseListPage', data);
      
       
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.getDailySalesList();
    
           
        });
        EventRequestPagemodalPage.present();
    }

    showDistributorRequest(){
      var EventRequestPagemodalPage = this.modalCtrl.create('DailySalesPage');
      
       
        EventRequestPagemodalPage.onDidDismiss(data => {
         this.getDailySalesList();
    
           
        });
        EventRequestPagemodalPage.present();
    }
}
