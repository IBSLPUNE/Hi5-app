import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { AgentAttendanceDetailPage } from '../agent-attendance-detail/agent-attendance-detail';
import moment from 'moment';


/**
 * Generated class for the AgentAttendanceListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-attendance-list',
  templateUrl: 'agent-attendance-list.html',
})
export class AgentAttendanceListPage {

    loading: any;
    employee_list_data: any;
    date_Max1: any;
    //selectedDate1: String;
    date_Min: Date = new Date();
    date_Max: Date = new Date();
    selectedDate: Date = new Date();
    selectedDate1: Date = new Date()
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
  this.EmployeeAttendace();
    //this.selectedDate1 = new Date().toISOString();
        this.selectedDate = new Date();
        this.selectedDate1 = new Date();
        this.date_Min.setMonth(0, 1);
        this.date_Max.setFullYear((new Date()).getFullYear() + 5);
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgentAttendanceListPage');
  }
   dateChanged() {
        this.EmployeeAttendace();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    setDate1(date: Date) {
        this.selectedDate1 = date;
        this.dateChanged();
    }
  EmployeeAttendace(){
   this.showLoader();
            this.authService.EmployeeAttendace(localStorage.getItem('agent_id'), moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.employee_list_data = result;
            
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

   showDetails(req_data) {
       var data = {
            id: req_data.id,
            date: req_data.date,
            in_time: req_data.in_time,
            out_time: req_data.out_time,
            working_hrs: req_data.working_hrs,
            present: req_data.present,
           comment: req_data.comment
           };
        var DetailsmodalPage = this.popoverCtrl.create(AgentAttendanceDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
         
    }
     showInOutDetails(eld){
      var data = { 
       date: eld.date
      }
      var AttendanceDetailsPage = this.popoverCtrl.create('AgentAttendanceInOutDetailPage', data, { cssClass: 'clsPopup' });
       AttendanceDetailsPage.onDidDismiss(() => {
            
        });
        AttendanceDetailsPage.present();
    
}

}
