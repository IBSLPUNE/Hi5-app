import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, PopoverController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
import { AllAttendanceDetailPage } from '../all-attendance-detail/all-attendance-detail';

/**
 * Generated class for the AttendanceAgencyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attendance-agency-list',
  templateUrl: 'attendance-agency-list.html',
})
export class AttendanceAgencyListPage {

   loading: any;
   member_data: any;
   date_Max1: any;
   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();
   selectedDate1: Date = new Date();

   member_type_data: Array<{ value: string, text: string }> = [];
   member_type: any;
   membertype: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public popoverCtrl: PopoverController) {
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
       this.getmemberdetails();
    }
    dateChanged() {
        this.getAgencyWiseAttendanceList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    setDate1(date: Date) {
        this.selectedDate1 = date;
        this.dateChanged();
    }
    getAgencyWiseAttendanceList(){
        this.showLoader();
            this.authService.getAgencyWiseAttendanceList(localStorage.getItem('reporting_id'),localStorage.getItem('agent_id'), this.member_type.value, moment(this.selectedDate).format('YYYY-MM-DD'), moment(this.selectedDate1).format('YYYY-MM-DD')).then((result) => {
            this.loading.dismiss();
            this.member_data = result;
            
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

            this.getAgencyWiseAttendanceList();
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
            first_name: req_data.first_name,
            middle_name: req_data.middle_name,
            last_name: req_data.last_name,
            date: req_data.date,
            in_time: req_data.in_time,
            out_time: req_data.out_time,
            working_hrs: req_data.working_hrs,
            present: req_data.present,
            comment: req_data.comment

        };
        var DetailsmodalPage = this.popoverCtrl.create(AllAttendanceDetailPage, data, { cssClass: 'clsPopup' });
        DetailsmodalPage.present();
         
    }
     showInOutDetails(eld){
       var data = { 
       id: eld.id,
       date: eld.date,
       agent_id: eld.agent_id
      }
      var AttendanceDetailsPage = this.popoverCtrl.create('AllAttendanceInOutDetailPage', data, { cssClass: 'clsPopup' });
       AttendanceDetailsPage.onDidDismiss(() => {
            
        });
        AttendanceDetailsPage.present();
    }
}

