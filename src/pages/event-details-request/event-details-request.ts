import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';

/**
 * Generated class for the EventDetailsRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details-request',
  templateUrl: 'event-details-request.html',
})
export class EventDetailsRequestPage { 

   loading: any;
   county_type_data: Array<{ value: string, text: string }> = [];
   county_type: any;
   countytype: any;

   state_type_data: Array<{ value: string, text: string }> = [];
   state_type: any;
   statetype: any;

   district_type_data: Array<{ value: string, text: string }> = [];
   district_type: any;
   districttype: any; 

   event_type_data: Array<{ value: string, text: string }> = [];
   event_type: any;
   eventtype: any; 

   member_type_data: Array<{ value: string, text: string }> = [];
   member_type: any;
   membertype: any;

   data_collections_data: Array<{ value: string, text: string }> = [];
   data_collections: any;
   datacollections: any; 
   

   city_type_data: Array<{ value: string, text: string }> = [];
   city_type: any;
   citytype: any; 

   select_type_data: any;
   select_type: any;

    date_Min: Date = new Date();
    date_Max: Date = new Date();
    selectedDate: Date = new Date();

   Code: string = '';
   Name: any;
   Discription: string = '';
  // EventDate: any;
   Place: string = '';
   Town: string = '';
   Village: string = '';
   Agency: any;
   parent: any;


   EventReq = { county_type: '', state_type: '', district_type: '', event_type: '', code: '', name: '', discription: '', current_date: '', place: '', town: '', village: '', city_type: '', member_type:'', agency_type:'', select_type:'' }

 constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
 this.getAllEventType();
      this.selectedDate = new Date();
      this.date_Min.setMonth(0, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 5);
  
  }
   textAreaEmpty(){
    if (this.Code != '') {
     console.log(this.Code);
    }
    if (this.Discription != '') {
     console.log(this.Discription);
    }
    if (this.Place != '') {
     console.log(this.Place);
    }
    if (this.Town != '') {
     console.log(this.Town);
    }
    if (this.Village != '') {
     console.log(this.Village);
    }
   
  }
 
   ionViewDidLoad() {
    this.select_type_data = [
           // { text: 'Select Event Type', value: '' },
            { text: 'Listed', value: 'Listed' },  
            { text: 'Unlisted', value: 'Unlisted' }
            
        ];
         this.select_type = { text: 'Listed', value: 'Listed' };
  }
   compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
     getCountyType() {
        //this.showLoader();
        this.authService.getCountyType().then((result) => {
           // this.loading.dismiss();

            this.countytype = result;

            this.county_type_data.push({ value: '', text: 'Select County' });

            for (let i = 0; i < this.countytype.length; i++) {
                this.county_type_data.push({ value: this.countytype[i].id, text: this.countytype[i].name });
            }

            this.county_type = { text: 'Select County', value: '' };

            //this.getAgency();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getStateType() {
      //  this.showLoader();
        this.authService.getStateType(this.county_type.value).then((result) => {
          //  this.loading.dismiss();

            this.statetype = result;

            this.state_type_data.push({ value: '', text: 'Select State' });

            for (let i = 0; i < this.statetype.length; i++) {
                this.state_type_data.push({ value: this.statetype[i].id, text: this.statetype[i].name });
            }

            this.state_type = { text: 'Select State', value: '' };

            //this.getDistrictType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getDistrictType() {
      //  this.showLoader();
        this.authService.getDistrictType(this.state_type.value).then((result) => {
           // this.loading.dismiss();

            this.districttype = result;

            this.district_type_data.push({ value: '', text: 'Select District' });

            for (let i = 0; i < this.districttype.length; i++) {
                this.district_type_data.push({ value: this.districttype[i].id, text: this.districttype[i].name });
            }

            this.district_type = { text: 'Select District', value: '' };
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    getCityType() {
      //  this.showLoader();
        this.authService.getCityType().then((result) => {
           // this.loading.dismiss();

            this.citytype = result;

            this.city_type_data.push({ value: '', text: 'Select City' });

            for (let i = 0; i < this.citytype.length; i++) {
                this.city_type_data.push({ value: this.citytype[i].id, text: this.citytype[i].name });
            }

            this.city_type = { text: 'Select City', value: '' };

           // this.getAllEventType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getAllEventType() {
      //  this.showLoader();
        this.authService.getAllEventType().then((result) => {
           // this.loading.dismiss();

            this.eventtype = result;

            this.event_type_data.push({ value: '', text: 'Select Categories' });

            for (let i = 0; i < this.eventtype.length; i++) {
                this.event_type_data.push({ value: this.eventtype[i].id, text: this.eventtype[i].name });
            }

            this.event_type = { text: 'Select Categories', value: '' };
                this.getmemberdetails();
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
                this.member_type_data.push({ value: this.membertype[i].id, text: this.membertype[i].first_name + ' '+ this.membertype[i].last_name });
            }

            this.member_type = { text: 'Select SR', value: '' };

            this.getCityType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    
    saveEventData(){
        if (this.member_type.value == '') {
             this.showAlert('Message', 'Please Select SR Name.');
            return;
        }
        if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }
        if (this.event_type.value == '') {
             this.showAlert('Message', 'Please Select Event Name.');
            return;
        }
      
     this.showLoader();
         var now = new Date();
        this.EventReq.code = this.Code;
        this.EventReq.name = this.Name;
        this.EventReq.discription = this.Discription;
        this.EventReq.select_type = this.select_type.value;
        this.EventReq.event_type = this.event_type.value;
        this.EventReq.current_date = moment(now).format('YYYY-MM-DD');
        this.EventReq.place = this.Place;
        this.EventReq.town = this.Town;
        this.EventReq.village = this.Village;
       // this.EventReq.county_type = this.county_type.value;
       // this.EventReq.state_type = this.state_type.value;
       // this.EventReq.district_type = this.district_type.value;
        this.EventReq.city_type = this.city_type.value;
        this.EventReq.member_type = this.member_type.value;
        this.EventReq.agency_type = localStorage.getItem('agency_id');
     
        this.authService.saveEventData(this.EventReq).then((result) => {
             this.loading.dismiss();

           
           if (result["status"].toLowerCase().indexOf('success') >= 0) {
                this.showAlert('success', result["status"]);
                 this.closeModal();
            } 
            else
            {
                this.showAlert('success', result["status"]);
            }
          }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });

    }
     public closeModal() {

        this.viewCtrl.dismiss();
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
    showAlert(title, text) {
        //this.loading.dismiss();

        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    }
}
