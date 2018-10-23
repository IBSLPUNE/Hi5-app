import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AgentAttendanceTimeWisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-attendance-time-wise',
  templateUrl: 'agent-attendance-time-wise.html',
})
export class AgentAttendanceTimeWisePage {

  ead = {id: '',
			first_name: '',
			middle_name: '',
			last_name: '',
			date: '',
			time: '',
			place : '',
			note: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
     this.ead.id = this.navParams.get('id');
		this.ead.first_name = this.navParams.get('first_name');
		this.ead.middle_name = this.navParams.get('middle_name');
		this.ead.last_name = this.navParams.get('last_name');
		this.ead.date = this.navParams.get('date');
		
		this.ead.time = this.navParams.get('time');
		this.ead.place = this.navParams.get('place');
		this.ead.note = this.navParams.get('note');
  }
    public closeModal() {

        this.viewCtrl.dismiss();
    }

}
