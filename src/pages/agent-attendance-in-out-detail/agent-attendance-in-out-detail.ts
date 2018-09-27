import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
//import { AgentAttendanceDetailPage } from '../agent-attendance-detail/agent-attendance-detail';
import moment from 'moment';
/**
 * Generated class for the AgentAttendanceInOutDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-attendance-in-out-detail',
  templateUrl: 'agent-attendance-in-out-detail.html',
})
export class AgentAttendanceInOutDetailPage {
  loading: any;
  employee_plan_list_data: any;
    date: any;
  
 eld = {date: ''};


  
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController, public viewCtrl : ViewController) {
     this.date = this.navParams.get('date');
    this.getAgentAttendaceData();
  }

   ionViewDidLoad() {
      this.eld.date = this.navParams.get('date');
  }
    public closeModal() {

        this.viewCtrl.dismiss();
     }
    getAgentAttendaceData() {
        this.showLoader();
        this.authService.getAgentAttendaceData(localStorage.getItem('agent_id'), moment(this.date).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.employee_plan_list_data = result;
             for (var i = 0; i < this.employee_plan_list_data.length; i++) {
                if (this.employee_plan_list_data[i].place.length > 100) {
                    this.employee_plan_list_data[i].place = this.employee_plan_list_data[i].place.substr(0, 90) + '...';
                }
            }
           
			
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
     showDetails(ead){
      var data = { id: ead.id,
      first_name: ead.first_name,
      middle_name: ead.middle_name,
      last_name: ead.last_name,
       date: ead.date,
        time: ead.time,
         place: ead.place,
          note: ead.note
      }
      var AttendanceDetailsmodalPage = this.popoverCtrl.create('AgentAttendanceTimeWisePage', data, { cssClass: 'clsPopup' });
       AttendanceDetailsmodalPage.onDidDismiss(() => {
            
        });
        AttendanceDetailsmodalPage.present();
    
}

}
