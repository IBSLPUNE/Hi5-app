import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AllAttendanceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-attendance-detail',
  templateUrl: 'all-attendance-detail.html',
})
export class AllAttendanceDetailPage {

   eld = {id: '',
      first_name: '',
      last_name: '',
      longitude: '',
      latitude: '',
      place: '',
      date: '',
      time: ''
     };


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  
         
  }
 

  ionViewDidLoad() {
    this.eld.id = this.navParams.get('id');
    this.eld.first_name = this.navParams.get('first_name');
    this.eld.last_name = this.navParams.get('last_name');
    this.eld.longitude = this.navParams.get('longitude');
    this.eld.latitude = this.navParams.get('latitude');
    this.eld.place = this.navParams.get('place');
    this.eld.date = this.navParams.get('date');
    this.eld.time = this.navParams.get('time');
   
   
  }
 
  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
