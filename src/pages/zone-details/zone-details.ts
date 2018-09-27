import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ZoneDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zone-details',
  templateUrl: 'zone-details.html',
})
export class ZoneDetailsPage {
  loading: any;
   req_data = {
            id: '',
            code: '', 
            name: '',
            address: '',
            country_id: '',
            state_id: '',
            district_id: '',
            contact_no: '',
            email: '',
            web_site: '',
            company_id: '',
            status: '',
            zone: ''
        };


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.req_data.id = this.navParams.get('id');
	  this.req_data.code = this.navParams.get('code');
		this.req_data.name = this.navParams.get('name');
	  this.req_data.address = this.navParams.get('address');
		this.req_data.country_id = this.navParams.get('country_id');
		this.req_data.state_id = this.navParams.get('state_id');
		this.req_data.district_id = this.navParams.get('district_id');
		this.req_data.contact_no = this.navParams.get('contact_no');
		this.req_data.email = this.navParams.get('email');
		this.req_data.web_site = this.navParams.get('web_site');
		this.req_data.company_id = this.navParams.get('company_id');
    this.req_data.zone = this.navParams.get('zone');
		this.req_data.status = this.navParams.get('status');
		
        console.log('ionViewDidLoad ZoneDetailsPage');
  }
  public closeModal(){
     this.viewCtrl.dismiss();
  }
   

}
