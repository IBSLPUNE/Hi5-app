import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';


/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
    loading: any;
    gender_type: any;
    gender_type_data: any;
    Contact: string = '';
    Name: string = '';

    gender_type1: any;
    gender_type_data1: any;
    Contact1: string = '';
    Name1: string = '';

    gender_type2: any;
    gender_type_data2: any;
    Contact2: string = '';
    Name2: string = '';

    gender_type3: any;
    gender_type_data3: any;
    Contact3: string = '';
    Name3: string = '';

    gender_type4: any;
    gender_type_data4: any;
    Contact4: string = '';
    Name4: string = '';
   

    ReqResult: any;
    event_id:any;
    text: any;
    toNumber: any;
    agent_id: any;
    
    contactlist ={ event_id:'',agent_id:'',agency_id:'',gender_type:'',gender_type1:'',gender_type2:'', gender_type3:'', gender_type4:'', contact:'', contact1:'', contact2:'',contact3:'',contact4:'', name:'', name1:'', name2:'',name3:'',name4:''};
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public alertCtrl: AlertController, public viewCtrl: ViewController, private authService: AuthServiceProvider) {
//, private authService: AuthServiceProvider
   this.event_id = this.navParams.get("id");
   this.agent_id = this.navParams.get("agent_id");
        
  }
  textAreaEmpty(){
    if (this.Contact != '') {
     console.log(this.Contact);
    }
    if (this.Name != '') {
     console.log(this.Name);
    }
    if (this.Contact1 != '') {
     console.log(this.Contact1);
    }
     if (this.Name1 != '') {
     console.log(this.Name1);
    }
    if (this.Contact2 != '') {
     console.log(this.Contact2);
    }
    if (this.Name2 != '') {
     console.log(this.Name2);
    }
    if (this.Contact3 != '') {
     console.log(this.Contact3);
    }
    if (this.Name3 != '') {
     console.log(this.Name3);
    }
     if (this.Contact4 != '') {
     console.log(this.Contact4);
    }
     if (this.Name4 != '') {
     console.log(this.Name4);
    }
  }
  ionViewDidLoad() {
     this.gender_type_data = [
          //  { text: 'Select Plan Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender_type = { text: 'Male', value: 'Male' };

          this.gender_type_data1 = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender_type1 = { text: 'Male', value: 'Male' };

          this.gender_type_data2 = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender_type2 = { text: 'Male', value: 'Male' };

          this.gender_type_data3 = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender_type3 = { text: 'Male', value: 'Male' };

          this.gender_type_data4 = [
          //  { text: 'Select Gender Type', value: '' },
            { text: 'Male', value: 'Male' },  
            { text: 'Female', value: 'Female' }
            
        ];
         this.gender_type4 = { text: 'Male', value: 'Male' };


  }
 saveContactList(){
  
   
      this.showLoader();

        this.contactlist.event_id = this.event_id;
        this.contactlist.agent_id = this.agent_id;
        this.contactlist.agency_id = localStorage.getItem('agency_id');
    
        this.contactlist.gender_type = this.gender_type.value;
        this.contactlist.gender_type1 = this.gender_type1.value;
        this.contactlist.gender_type2 = this.gender_type2.value;
        this.contactlist.gender_type3 = this.gender_type3.value;
        this.contactlist.gender_type4 = this.gender_type4.value;

         this.contactlist.contact = this.Contact;
         this.contactlist.contact1 = this.Contact1;
         this.contactlist.contact2 = this.Contact2;
         this.contactlist.contact3 = this.Contact3;
         this.contactlist.contact4 = this.Contact4;

         this.contactlist.name = this.Name;
         this.contactlist.name1 = this.Name1;
         this.contactlist.name2 = this.Name2;
         this.contactlist.name3 = this.Name3;
         this.contactlist.name4 = this.Name4;

           this.authService.saveContactList(this.contactlist).then((result) => {
            this.loading.dismiss();
            this.ReqResult = result;
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

 
  compareFn(option1: any, option2: any) {
        return option1.value === option2.value;
    }

public closeModal(){
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
