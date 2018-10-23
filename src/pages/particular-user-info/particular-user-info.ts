import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ParticularUserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-particular-user-info',
  templateUrl: 'particular-user-info.html',
})
export class ParticularUserInfoPage {
 req_data = {
			id: '',
			email: '',
			username:'',
			first_name: '',
			middle_name : '',
			last_name: '',
			role_id: '',
			agent_id: '',
			status: '',
			date_of_birth: '',
			address: '',
			pin_code: '',
			agency : ''
			};


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticularUserInfoPage');

    this.req_data.id = this.navParams.get('id');
	    this.req_data.email = this.navParams.get('email');
	    this.req_data.username = this.navParams.get('username');
		this.req_data.first_name = this.navParams.get('first_name');
		
		this.req_data.middle_name = this.navParams.get('middle_name');
		this.req_data.last_name = this.navParams.get('last_name');
		this.req_data.role_id = this.navParams.get('role_id');
		this.req_data.agent_id = this.navParams.get('agent_id');
		
		this.req_data.status = this.navParams.get('status');
		this.req_data.date_of_birth = this.navParams.get('date_of_birth');
		this.req_data.address = this.navParams.get('address');
		
		this.req_data.pin_code = this.navParams.get('pin_code');
		this.req_data.agency = this.navParams.get('agency');
		
  }
  public closeModal(){
		this.viewCtrl.dismiss();
	}


}
