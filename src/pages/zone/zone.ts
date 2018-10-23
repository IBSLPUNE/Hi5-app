import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the ZonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone',
  templateUrl: 'zone.html',
})
export class ZonePage {

   loading: any;
  
   company_type_data: Array<{ value: string, text: string }> = [];
   company_type: any;
   companytype: any;

   county_type_data: Array<{ value: string, text: string }> = [];
   county_type: any;
   countytype: any;

   state_type_data: Array<{ value: string, text: string }> = [];
   state_type: any;
   statetype: any;

   district_type_data: Array<{ value: string, text: string }> = [];
   district_type: any;
   districttype: any;

   website: string = '';
   email: string = '';
   contact_no: string = '';
   name: any;
   address: string = '';
   code: string = '';
  
  select_data_type: any;
  zone: any;
  

   ZoneReq = { county_type: '', state_type: '', district_type: '', code: '', name: '', 
    address: '', contact_no: '', email: '', website:'', company_type:'', status:true, zone: '' }


 constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController) {
  this.getCompanyType();
  }
   textAreaEmpty(){
    if (this.website != '') {
     console.log(this.website);
    }
    if (this.email != '') {
     console.log(this.email);
    }
    if (this.contact_no != '') {
     console.log(this.contact_no);
    }
    if (this.address != '') {
     console.log(this.address);
    }
    if (this.code != '') {
     console.log(this.code);
    }
  }
  ionViewDidLoad() {
        this.select_data_type = [
            { text: 'Select Zone', value: '' },
            { text: 'South', value: 'South' },
            { text: 'East', value: 'East' },
            { text: 'West', value: 'West' },
            { text: 'North', value: 'North' },  
            { text: 'Center', value: 'Center' }
            
        ];
         this.zone = { text: 'Select Zone', value: '' };

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
    compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }
    public closeModal() {

        this.viewCtrl.dismiss();
    }

    saveZoneRequest(){
        if (this.company_type.value == '') {
             this.showAlert('Message', 'Please Select Company Name.');
            return;
        }
        if (this.zone.value == '') {
             this.showAlert('Message', 'Please Select Zone.');
            return;
        }
         if (this.name == undefined) {
             this.showAlert('Message', 'Name is Mandatory.');
            return;
        }
         if (this.county_type.value == '') {
             this.showAlert('Message', 'Please Select County.');
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

       
        this.ZoneReq.code = this.code;
        this.ZoneReq.name = this.name;
        this.ZoneReq.company_type = this.company_type.value;
        this.ZoneReq.email = this.email;
        this.ZoneReq.contact_no = this.contact_no;
        this.ZoneReq.address = this.address;
        this.ZoneReq.website = this.website;
        this.ZoneReq.county_type = this.county_type.value;
        this.ZoneReq.state_type = this.state_type.value;
        this.ZoneReq.district_type = this.district_type.value;
        this.ZoneReq.zone = this.zone.value;
       // this.ZoneReq.status = true;
  
     
        this.authService.saveZoneRequest(this.ZoneReq).then((result) => {
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
