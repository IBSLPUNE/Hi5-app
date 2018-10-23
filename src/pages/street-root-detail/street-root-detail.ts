import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the StreetRootDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-street-root-detail',
  templateUrl: 'street-root-detail.html',
})
export class StreetRootDetailPage {

  loading: any;
    req_data = {id: '',
            distributor: '',
            street_root: '',
            address: '',
            status: ''
         };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

    ionViewDidLoad() {
       this.req_data.id = this.navParams.get('id');
	   this.req_data.distributor = this.navParams.get('distributor');
	   this.req_data.street_root = this.navParams.get('street_root');
	   this.req_data.address = this.navParams.get('address');
	   this.req_data.status = this.navParams.get('status');
     console.log('ionViewDidLoad StreetRootDetailPage');
    }
    public closeModal(){
     this.viewCtrl.dismiss();
    }
}
