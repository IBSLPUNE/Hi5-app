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
      middle_name: '',
      last_name: '',
      date: '',
      in_time: '',
      out_time: '',
      working_hrs: '',
      present: '',
      comment: ''
     };


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  
         
  }
 

  ionViewDidLoad() {
    this.eld.id = this.navParams.get('id');
    this.eld.first_name = this.navParams.get('first_name');
    this.eld.middle_name = this.navParams.get('middle_name');
    this.eld.last_name = this.navParams.get('last_name');
    this.eld.date = this.navParams.get('date');
    this.eld.in_time = this.navParams.get('in_time');
    this.eld.out_time = this.navParams.get('out_time');
    this.eld.working_hrs = this.navParams.get('working_hrs');
    this.eld.present = this.navParams.get('present');
    this.eld.comment = this.navParams.get('comment'); 
  }
 
  public closeModal(){
    this.viewCtrl.dismiss();
  }

}
