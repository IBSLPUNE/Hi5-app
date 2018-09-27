import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the AgencyRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agency-request',
  templateUrl: 'agency-request.html',
})
export class AgencyRequestPage {
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

   company_type_data: Array<{ value: string, text: string }> = [];
   company_type: any;
   companytype: any;


   Code: string = '';
   Name: any;
   fullName: string = '';
   Address: string = '';
   pinCode: string = '';
   City: string = '';
   contactNo: string = '';
   Email: string = '';
   Website: string = '';

   AgencyReq = { county_type: '', state_type: '', district_type: '', code: '', name: '', 
   full_name: '', address: '', pin_code: '', city: '', contact_no: '', email: '', website:'', company_type:'', status:true };

  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
       this.getCountyType();
  }
   textAreaEmpty(){
    if (this.Code != '') {
     console.log(this.Code);
    }
    if (this.fullName != '') {
     console.log(this.fullName);
    }
    if (this.Address != '') {
     console.log(this.Address);
    }
    if (this.pinCode != '') {
     console.log(this.pinCode);
    }
    if (this.City != '') {
     console.log(this.City);
    }
    if (this.contactNo != '') {
     console.log(this.contactNo);
    }
    if (this.Email != '') {
     console.log(this.Email);
    }
    if (this.Website != '') {
     console.log(this.Website);
    }
  }

  ionViewDidLoad() {
  this.getCompanyType();
    console.log('ionViewDidLoad AgencyRequestPage');
  }
   compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }

     getCountyType() {
      //  this.showLoader();
        this.authService.getCountyType().then((result) => {
          //  this.loading.dismiss();

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

            //this.getCompanyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
     getCompanyType() {
        this.showLoader();
        this.authService.getCompanyType().then((result) => {
            this.loading.dismiss();

            this.companytype = result;

            this.company_type_data.push({ value: '', text: 'Select Company' });

            for (let i = 0; i < this.companytype.length; i++) {
                this.company_type_data.push({ value: this.companytype[i].id, text: this.companytype[i].name });
            }

            this.company_type = { text: 'Select Company', value: '' };

           // this.getCompanyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    saveAgencyData(){

        if (this.Name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }
        if (this.county_type.value == '') {
             this.showAlert('Message', 'Please Select County Name.');
            return;
        }
         if (this.state_type.value == '') {
             this.showAlert('Message', 'Please Select State Name.');
            return;
        }
        if (this.district_type.value == '') {
             this.showAlert('Message', 'Please Select District Name.');
            return;
        }

        this.showLoader();

       
        this.AgencyReq.code = this.Code;
        this.AgencyReq.name = this.Name;
        this.AgencyReq.full_name = this.fullName;
        this.AgencyReq.address = this.Address;
        this.AgencyReq.pin_code = this.pinCode;
        this.AgencyReq.county_type = this.county_type.value;
        this.AgencyReq.state_type = this.state_type.value;
        this.AgencyReq.district_type = this.district_type.value;
        this.AgencyReq.city = this.City;
        this.AgencyReq.contact_no = this.contactNo;
        this.AgencyReq.email = this.Email;
        this.AgencyReq.website = this.Website;
        this.AgencyReq.company_type = this.company_type.value;
        this.AgencyReq.status = true;
     
        this.authService.saveAgencyData(this.AgencyReq).then((result) => {
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
