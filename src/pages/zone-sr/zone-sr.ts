import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the ZoneSrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-sr',
  templateUrl: 'zone-sr.html',
})
export class ZoneSrPage {

  loading: any;

   blood_type_data: Array<{ value: string, text: string }> = [];
   blood_type: any;
   bloodtype: any;

   county_type_data: Array<{ value: string, text: string }> = [];
   county_type: any;
   countytype: any;

   state_type_data: Array<{ value: string, text: string }> = [];
   state_type: any;
   statetype: any;

   district_type_data: Array<{ value: string, text: string }> = [];
   district_type: any;
   districttype: any;

   agency_type_data: Array<{ value: string, text: string }> = [];
   agency_type: any;
   agencytype: any;

   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();

   Code: any;
   firstName: any;
   middleName: any;
   lastName: any;
  
   Email: any;
   officialNo: any;
   personalNo: any;
   emergencyNo: any;
  
   Address: any;
   pinCode: any;
   City: any;
  
   gender: any;
   gender_data: any;


   ZoneSRReq = { county_type: '', state_type: '', district_type: '', code: '', first_name: '', 
   middle_name: '', last_name: '', gender: '', email: '', official_no: '', personal_no: '', emergency_no: '', blood_type: '', selectedDate: '', address: '', pin_code: '', city: '', agency_type:'',status:true }

//employee_id: '', manager1_id: '', manager2_id: '',
   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
      this.getBloodGroupType();
      this.selectedDate = new Date();
      this.date_Min.setMonth(-500, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 1);
  }

  ionViewDidLoad() {
     this.gender_data = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender = { text: 'Male', value: 'Male' };

  }
  
   dateChanged() {
       // this.getEmployeePlanList();
    }

    setDate(date: Date) {
        this.selectedDate = date;
        this.dateChanged();
    }
    compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }

      getBloodGroupType() {
        this.showLoader();
        this.authService.getBloodGroupType().then((result) => {
            this.loading.dismiss();

            this.bloodtype = result;

            this.blood_type_data.push({ value: '', text: 'Select Blood Group' });

            for (let i = 0; i < this.bloodtype.length; i++) {
                this.blood_type_data.push({ value: this.bloodtype[i].id, text: this.bloodtype[i].name });
            }

            this.blood_type = { text: 'Select Blood Group', value: '' };

            this.getCountyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
      }
     getCountyType() {
       // this.showLoader();
        this.authService.getCountyType().then((result) => {
           // this.loading.dismiss();

            this.countytype = result;

            this.county_type_data.push({ value: '', text: 'Select County' });

            for (let i = 0; i < this.countytype.length; i++) {
                this.county_type_data.push({ value: this.countytype[i].id, text: this.countytype[i].name });
            }

            this.county_type = { text: 'Select County', value: '' };

            //this.getStateType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getStateType() {
      //  this.showLoader();
        this.authService.getStateType(this.county_type.value).then((result) => {
           // this.loading.dismiss();

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

            this.getAgencyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
      getAgencyType() {
      //  this.showLoader();
        this.authService.getAgencyType(localStorage.getItem('agency_id')).then((result) => {
          //  this.loading.dismiss();

            this.agencytype = result;

            this.agency_type_data.push({ value: '', text: 'Select Agency' });

            for (let i = 0; i < this.agencytype.length; i++) {
                this.agency_type_data.push({ value: this.agencytype[i].id, text: this.agencytype[i].name });
            }

            this.agency_type = { text: 'Select Agency', value: '' };

            //this.getc_off_date();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }

    saveZoneSRData(){
     if (this.firstName == undefined) {
             this.showAlert('Message', 'First Name is Mandatory.');
            return;
      }
      if (this.lastName == undefined) {
             this.showAlert('Message', 'Last Name is Mandatory.');
            return;
      }
      if (this.county_type.value == '') {
             this.showAlert('Message', 'Please Select Country.');
            return;
      }
      if (this.state_type.value == '') {
             this.showAlert('Message', 'Please Select State.');
            return;
      }
      if (this.district_type.value == '') {
             this.showAlert('Message', 'Please Select District.');
            return;
      }
      this.showLoader();

       
        this.ZoneSRReq.code = this.Code;
        this.ZoneSRReq.first_name = this.firstName;
        this.ZoneSRReq.middle_name = this.middleName;
        this.ZoneSRReq.last_name = this.lastName;
        this.ZoneSRReq.gender = this.gender.value;
        this.ZoneSRReq.email = this.Email;
        this.ZoneSRReq.official_no = this.officialNo;
        this.ZoneSRReq.personal_no = this.personalNo;
        this.ZoneSRReq.emergency_no = this.emergencyNo;
        this.ZoneSRReq.blood_type = this.blood_type.value;
        this.ZoneSRReq.selectedDate = moment(this.selectedDate.toString()).format('YYYY-MM-DD');
        this.ZoneSRReq.address = this.Address;
        this.ZoneSRReq.pin_code = this.pinCode;
        this.ZoneSRReq.county_type = this.county_type.value;
        this.ZoneSRReq.state_type = this.state_type.value;
        this.ZoneSRReq.district_type = this.district_type.value;
        this.ZoneSRReq.city = this.City;
        this.ZoneSRReq.agency_type = localStorage.getItem('agency_id');
        this.ZoneSRReq.status = true;
      
        this.authService.saveZoneSRData(this.ZoneSRReq).then((result) => {
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
