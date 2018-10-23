import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the AgencyWiseDailySalesDatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-wise-daily-sales-datail',
  templateUrl: 'agency-wise-daily-sales-datail.html',
})
export class AgencyWiseDailySalesDatailPage {

  sub_distributor_type: any;
  
   current_date: any;


    loading: any;
    root_wise_data: any;
    agent_id: any;

    daily_sales_data: any;
    total_quantity: any;



  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl : ViewController) {

 
  }

  ionViewDidLoad() {
    this.agent_id = this.navParams.get('agent_id');
    this.sub_distributor_type = this.navParams.get('sub_distributor');
    this.current_date = this.navParams.get('date');
		this.getProductWiseList();
		
        console.log('ionViewDidLoad DailySalesDetailsPage');
  }
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}
	 getProductWiseList(){
        this.showLoader();
            this.authService.getProductWiseList(this.agent_id,this.sub_distributor_type,this.current_date).then((result) => {
            this.loading.dismiss();
            this.root_wise_data = result;
            this.getProductTotalPrice();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getProductTotalPrice(){
        this.showLoader();
            this.authService.getProductTotalPrice(this.agent_id,this.sub_distributor_type,this.current_date).then((result) => {
            this.loading.dismiss();
            this.daily_sales_data = result;
            this.total_quantity = this.daily_sales_data.total_quantity;
          // this.getproductlist();
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
}
