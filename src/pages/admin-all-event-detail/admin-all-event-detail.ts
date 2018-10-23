import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AdminAllEventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-all-event-detail',
  templateUrl: 'admin-all-event-detail.html',
})
export class AdminAllEventDetailPage {

req_data = {
			id: '',
			contact_no: '',
			gender: '',
			agent_first_name : '',
			agent_last_name: '',
			event_detail_name: '',
			event_detail_type: '',
			event_detail_date: ''
			};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
  this.req_data.id = this.navParams.get('id');
	    this.req_data.contact_no = this.navParams.get('contact_no');
		this.req_data.gender = this.navParams.get('gender');
	    this.req_data.agent_first_name = this.navParams.get('agent_first_name');
		this.req_data.agent_last_name = this.navParams.get('agent_last_name');
		this.req_data.event_detail_name = this.navParams.get('event_detail_name');
		this.req_data.event_detail_type = this.navParams.get('event_detail_type');
		this.req_data.event_detail_date = this.navParams.get('event_detail_date');
		
    console.log('ionViewDidLoad AdminAllEventDetailPage');
  }
  public closeModal(){
		this.viewCtrl.dismiss();
	}



}
