import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import moment from 'moment';
/**
 * Generated class for the AdminAgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-agent',
  templateUrl: 'admin-agent.html',
})
export class AdminAgentPage {

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

   agent_type_data: Array<{ value: string, text: string }> = [];
   agent_type: any;
   agenttype: any;

   agent_type_data1: Array<{ value: string, text: string }> = [];
   agent_type1: any;
   agenttype1: any;


    role_type_data: Array<{ value: string, text: string }> = [];
   role_type: any;
   roletype: any;

   date_Min: Date = new Date();
   date_Max: Date = new Date();
   selectedDate: Date = new Date();

   Code: string = '';
   firstName: any;
   middleName: string = '';
   lastName: string = '';
  
   Email: string = '';
   officialNo: string = '';
   personalNo: string = '';
   emergencyNo: string = '';
  
   Address: string = '';
   pinCode: string = '';
   City: string = '';
  
   gender: any;
   gender_data: any;


   MemberReq = { county_type: '', state_type: '', district_type: '', code: '', first_name: '', 
   middle_name: '', last_name: '', gender: '', email: '', official_no: '', personal_no: '', emergency_no: '', blood_type: '', selectedDate: '', address: '', pin_code: '', city: '', agency_type:'', role_type:'', status:true, agent_type: '', agent_type1: ''  }

//employee_id: '', manager1_id: '', manager2_id: '',
   constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
      this.getBloodGroupType();
      this.selectedDate = new Date();
      this.date_Min.setMonth(-500, 1);
      this.date_Max.setFullYear((new Date()).getFullYear() + 1);
  }
   textAreaEmpty(){
    if (this.Code != '') {
     console.log(this.Code);
    }
    if (this.middleName != '') {
     console.log(this.middleName);
    }
    if (this.lastName != '') {
     console.log(this.lastName);
    }
    if (this.Email != '') {
     console.log(this.Email);
    }
    if (this.officialNo != '') {
     console.log(this.officialNo);
    }
     if (this.personalNo != '') {
     console.log(this.personalNo);
    }
    if (this.emergencyNo != '') {
     console.log(this.emergencyNo);
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
  }

  ionViewDidLoad() {
     this.gender_data = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender = { text: 'Male', value: 'Male' };
        this.getAllAgentDetails();
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
           // this.loading.dismiss();

            this.bloodtype = result;

            this.blood_type_data.push({ value: '', text: 'Select Blood Group' });

            for (let i = 0; i < this.bloodtype.length; i++) {
                this.blood_type_data.push({ value: this.bloodtype[i].id, text: this.bloodtype[i].name });
            }

            this.blood_type = { text: 'Select Blood Group', value: '' };

            this.getAgency();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
      }
     getCountyType() {
       // this.showLoader();
        this.authService.getCountyType().then((result) => {
            this.loading.dismiss();

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
        //this.showLoader();
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

           
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
      getAgency() {
      //  this.showLoader();
        this.authService.getAgency().then((result) => {
           // this.loading.dismiss();

            this.agencytype = result;

            this.agency_type_data.push({ value: '', text: 'Select SO' });

            for (let i = 0; i < this.agencytype.length; i++) {
                this.agency_type_data.push({ value: this.agencytype[i].id, text: this.agencytype[i].name });
            }

            this.agency_type = { text: 'Select SO', value: '' };

          // this.getCountyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    getAllAgentDetails() {
      //  this.showLoader();
        this.authService.getAllAgentDetails().then((result) => {
           // this.loading.dismiss();

            this.agenttype = result;

            this.agent_type_data.push({ value: '', text: 'Select Reporting' });

            for (let i = 0; i < this.agenttype.length; i++) {
                this.agent_type_data.push({ value: this.agenttype[i].id, text: this.agenttype[i].first_name + ' ' + this.agenttype[i].last_name });;
            }

            this.agent_type = { text: 'Select Reporting', value: '' };

           this.getAllAgent();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    getAllAgent() {
      //  this.showLoader();
        this.authService.getAllAgent().then((result) => {
           // this.loading.dismiss();

            this.agenttype1 = result;

            this.agent_type_data1.push({ value: '', text: 'Select Reporting' });

            for (let i = 0; i < this.agenttype1.length; i++) {
                this.agent_type_data1.push({ value: this.agenttype1[i].id, text: this.agenttype1[i].first_name + ' ' + this.agenttype1[i].last_name });;
            }

            this.agent_type1 = { text: 'Select Reporting', value: '' };

           this.getCountyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
    }
    getRoleType() {
        //this.showLoader();
        this.authService.getRoleType().then((result) => {
           // this.loading.dismiss();

            this.roletype = result;

            this.role_type_data.push({ value: '', text: 'Select Role' });

            for (let i = 0; i < this.roletype.length; i++) {
                this.role_type_data.push({ value: this.roletype[i].id, text: this.roletype[i].name });
            }

            this.role_type = { text: 'Select Role', value: '' };

           // this.getCountyType();
        }, (err) => {
            this.loading.dismiss();
            let errJson = err.json();
            this.presentToast(errJson.message);
        });
      }

    saveAgencyRequest(){
      
      if (this.firstName == undefined) {
             this.showAlert('Message', 'First Name is Mandatory.');
            return;
        }
      
         if (this.Email == '') {
             this.showAlert('Message', 'Email is Mandatory.');
            return;
        }
        if (this.officialNo == '') {
             this.showAlert('Message', 'Please Select Official Contact No.');
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
    
         if (this.agency_type.value == '') {
             this.showAlert('Message', 'Agency Name is Mandatory.');
            return;
        }
    
     this.showLoader();

       
        this.MemberReq.code = this.Code;
        this.MemberReq.first_name = this.firstName;
        this.MemberReq.middle_name = this.middleName;
        this.MemberReq.last_name = this.lastName;
        this.MemberReq.gender = this.gender.value;
        this.MemberReq.email = this.Email;
        this.MemberReq.official_no = this.officialNo;
        this.MemberReq.personal_no = this.personalNo;
        this.MemberReq.emergency_no = this.emergencyNo;
        this.MemberReq.blood_type = this.blood_type.value;
        this.MemberReq.selectedDate = moment(this.selectedDate.toString()).format('YYYY-MM-DD');
        this.MemberReq.address = this.Address;
        this.MemberReq.pin_code = this.pinCode;
        this.MemberReq.county_type = this.county_type.value;
        this.MemberReq.state_type = this.state_type.value;
        this.MemberReq.district_type = this.district_type.value;
        this.MemberReq.city = this.City;
        this.MemberReq.agency_type = this.agency_type.value;
        this.MemberReq.agent_type = this.agent_type.value;
        this.MemberReq.agent_type1 = this.agent_type1.value;
       // this.MemberReq.role_type = this.role_type.value;
        this.MemberReq.status = true;
  
     
        this.authService.saveAgencyRequest(this.MemberReq).then((result) => {
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
