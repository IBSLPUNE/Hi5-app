import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AgentDistributorDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agent-distributor-detail',
  templateUrl: 'agent-distributor-detail.html',
})
export class AgentDistributorDetailPage {

  req_data = {
			id: '',
			distributor: '',
			name : '',
			description: '',
			area: '',
			address: '',
			status : '',
			mobile_number: '',
			street_root: ''
			};
	
	constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
	
	}

	ionViewDidLoad() {
		
		this.req_data.id = this.navParams.get('id');
        this.req_data.distributor = this.navParams.get('distributor');
	    this.req_data.name = this.navParams.get('name');
		this.req_data.description = this.navParams.get('description');
		this.req_data.area = this.navParams.get('area');
		this.req_data.address = this.navParams.get('address');
		this.req_data.status = this.navParams.get('status');
		this.req_data.mobile_number = this.navParams.get('mobile_number');
		this.req_data.street_root = this.navParams.get('street_root');
	}
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}

}
