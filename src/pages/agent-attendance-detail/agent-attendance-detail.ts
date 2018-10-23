import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AgentAttendanceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-attendance-detail',
  templateUrl: 'agent-attendance-detail.html',
})
export class AgentAttendanceDetailPage {

  req_data = {
			id: '',
			date: '',
			in_time : '',
			out_time: '',
			working_hrs: '',
			present: '',
			comment: ''
			};
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
	
	}

	ionViewDidLoad() {
		
		this.req_data.id = this.navParams.get('id');
        this.req_data.date = this.navParams.get('date');
	    this.req_data.in_time = this.navParams.get('in_time');
		this.req_data.out_time = this.navParams.get('out_time');
		this.req_data.working_hrs = this.navParams.get('working_hrs');
		this.req_data.present = this.navParams.get('present');
		this.req_data.comment = this.navParams.get('comment');
	}
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}


}
