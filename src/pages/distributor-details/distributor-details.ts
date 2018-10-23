import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DistributorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distributor-details',
  templateUrl: 'distributor-details.html',
})
export class DistributorDetailsPage {
      
       req_data = {
			id: '',
			name: '',
			description : '',
			area: '',
			address: '',
			distributor_type: '',
			status: '',
			agency: ''
			
			};



  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
        this.req_data.id = this.navParams.get('id');
		this.req_data.name = this.navParams.get('name');
		this.req_data.description = this.navParams.get('description');
		this.req_data.area = this.navParams.get('area');
		this.req_data.address = this.navParams.get('address');
		this.req_data.distributor_type = this.navParams.get('distributor_type');
		this.req_data.agency = this.navParams.get('agency');
		this.req_data.status = this.navParams.get('status');
		
        console.log('ionViewDidLoad DistributorDetailsPage');
  }
  
	public closeModal(){
		this.viewCtrl.dismiss();
	}


}
