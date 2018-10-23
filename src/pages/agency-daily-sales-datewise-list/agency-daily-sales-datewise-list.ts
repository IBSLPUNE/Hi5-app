import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AgencyWiseDailySalesDatailPage } from '../agency-wise-daily-sales-datail/agency-wise-daily-sales-datail';

/**
 * Generated class for the AgencyDailySalesDatewiseListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-daily-sales-datewise-list',
  templateUrl: 'agency-daily-sales-datewise-list.html',
})
export class AgencyDailySalesDatewiseListPage {

  loading: any;
  dailyId: any;
  dailydate: any;
  daily_sales_data: any;
  agent_id: any;
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl : ViewController) {
   this.dailyId = this.navParams.get('id');
   this.agent_id = this.navParams.get('agent_id');
   this.dailydate = this.navParams.get('date');
   this.getReportingWiseDateWiseSale();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyDailySalesDatewiseListPage');
  }
   getReportingWiseDateWiseSale(){
        this.showLoader();
            this.authService.getReportingWiseDateWiseSale(this.agent_id,localStorage.getItem('reporting_id'),this.dailydate).then((result) => {
            this.loading.dismiss();
            this.daily_sales_data = result;
          // this.getproductlist();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
   getAgencyDailySalesDateWiseList(){
   this.showLoader();
            this.authService.getAgencyDailySalesDateWiseList(localStorage.getItem('reporting_id'), this.agent_id,this.dailydate).then((result) => {
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
    public closeModal(){
		this.viewCtrl.dismiss();
	}
    showModalDialog(req_data) {
      var data = {
              id: req_data.id,
              sub_distributor: req_data.sub_distributor,
              date: req_data.date,
              agent_id: req_data.agent_id
         };
       
    
        var DetailsmodalPage = this.popoverCtrl.create(AgencyWiseDailySalesDatailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
    }
     cancelDailySaleRequest(daily_sale_id) {
       // this.showLoader();
        this.authService.cancelDailySaleRequest(daily_sale_id).then((result) => {
            //this.loading.dismiss();

            this.getReportingWiseDateWiseSale();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     presentConfirm(daily_sale_id) {
        const alert = this.alertCtrl.create({
            title: 'Confirmation',
            message: 'Are you sure?',
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        console.log('Ok clicked');
                        this.cancelDailySaleRequest(daily_sale_id);
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
