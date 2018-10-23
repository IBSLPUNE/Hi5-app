import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AdminAgentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-agent-detail',
  templateUrl: 'admin-agent-detail.html',
})
export class AdminAgentDetailPage {

  req_data = {
			id: '',
			code: '',
			first_name: '',
			middle_name : '',
			last_name: '',
			gender: '',
			email: '',
			offical_contact_no: '',
			personal_contact_no: '',
			emergency_contact_no: '',
			blood_group: '',
			date_of_birth : '',
			address: '',
			pin_code: '',
			country: '',
			agency_id: '',
			status: '',
			district: '',
			state: ''
			};
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
	
	}

	ionViewDidLoad() {
		
		this.req_data.id = this.navParams.get('id');
	    this.req_data.code = this.navParams.get('code');
		this.req_data.first_name = this.navParams.get('first_name');
		
		this.req_data.middle_name = this.navParams.get('middle_name');
		this.req_data.last_name = this.navParams.get('last_name');
		this.req_data.gender = this.navParams.get('gender');
		this.req_data.email = this.navParams.get('email');
		this.req_data.offical_contact_no = this.navParams.get('offical_contact_no');
		this.req_data.personal_contact_no = this.navParams.get('personal_contact_no');
		this.req_data.emergency_contact_no = this.navParams.get('emergency_contact_no');
		this.req_data.blood_group = this.navParams.get('blood_group');
		
		this.req_data.date_of_birth = this.navParams.get('date_of_birth');
		this.req_data.address = this.navParams.get('address');
		this.req_data.pin_code = this.navParams.get('pin_code');
		this.req_data.country = this.navParams.get('country');
		this.req_data.agency_id = this.navParams.get('agency_id');
		this.req_data.status = this.navParams.get('status');
		this.req_data.district = this.navParams.get('district');
		this.req_data.state = this.navParams.get('state');
		
		//console.log(this.req_data);
	}
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}

}
