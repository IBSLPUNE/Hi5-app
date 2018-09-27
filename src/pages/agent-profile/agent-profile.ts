import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController, ViewController, ModalController  } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the AgentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-profile',
  templateUrl: 'agent-profile.html',
})
export class AgentProfilePage {
  
  loading: any;
  membertype: any;
  empGender: any;
  userImage: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private authService: AuthServiceProvider, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public viewCtrl: ViewController, private modalCtrl: ModalController) {
   
  }

  ionViewDidLoad() {
    this.empGender = localStorage.getItem('empGender'); 
  this.getpurticularmemberdetails();
  }
  updateUrl() {
           if(this.empGender == "Female")
          {
           this.userImage = 'assets/imgs/female.png';
          }
            else{
          this.userImage = 'assets/imgs/avatar.png';

          }
     }
  
     getpurticularmemberdetails() {
       // this.showLoader();
        this.authService.getpurticularmemberdetails(localStorage.getItem('agent_id')).then((result) => {
           // this.loading.dismiss();

            this.membertype = result;
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
    gotoAnotherPage(){
     var AnotherPagemodalPage = this.modalCtrl.create('LoginUpdatePage');
      
       
        AnotherPagemodalPage.onDidDismiss(data => {
          
        });
        AnotherPagemodalPage.present();
    
    }

}
