import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ZoneSoDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-so-detail',
  templateUrl: 'zone-so-detail.html',
})
export class ZoneSoDetailPage {

    req_data = {
			id: '',
			code: '',
			name : '',
			full_name: '',
			address: '',
			pin_code: '',
			country: '',
			state: '',
			district: '',
			city: '',
			contact_no : '',
			email: '',
			web_site: '',
			company: '',
			status:''
			
			};
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
	}

	ionViewDidLoad() {
		
		this.req_data.id = this.navParams.get('id');
	
		this.req_data.code = this.navParams.get('code');
		
		this.req_data.name = this.navParams.get('name');
		this.req_data.full_name = this.navParams.get('full_name');
		this.req_data.address = this.navParams.get('address');
		this.req_data.pin_code = this.navParams.get('pin_code');
		this.req_data.country = this.navParams.get('country');
		this.req_data.state = this.navParams.get('state');
		this.req_data.district = this.navParams.get('district');
		this.req_data.city = this.navParams.get('city');
		
		this.req_data.contact_no = this.navParams.get('contact_no');
		this.req_data.email = this.navParams.get('email');
		this.req_data.web_site = this.navParams.get('web_site');
		this.req_data.company = this.navParams.get('company');
		
	}
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}

}
