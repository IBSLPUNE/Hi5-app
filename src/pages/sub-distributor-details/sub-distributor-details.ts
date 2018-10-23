import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SubDistributorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub-distributor-details',
  templateUrl: 'sub-distributor-details.html',
})
export class SubDistributorDetailsPage {

   req_data = {
			id: '',
			name: '',
			description : '',
			area: '',
			address: '',
			distributor: '',
			status: '',
			agency: '',
			mobile_number: '',
			root_id: ''
			};
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
    }
    ionViewDidLoad() {
        this.req_data.id = this.navParams.get('id');
		this.req_data.name = this.navParams.get('name');
		this.req_data.description = this.navParams.get('description');
		this.req_data.area = this.navParams.get('area');
		this.req_data.address = this.navParams.get('address');
		this.req_data.distributor = this.navParams.get('distributor');
		this.req_data.agency = this.navParams.get('agency');
		this.req_data.status = this.navParams.get('status');
		this.req_data.mobile_number = this.navParams.get('mobile_number');
		this.req_data.root_id = this.navParams.get('root_id');
        console.log('ionViewDidLoad SubDistributorDetailsPage');
    }
    public closeModal(){
		this.viewCtrl.dismiss();
	}
}
