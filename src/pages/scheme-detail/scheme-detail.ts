import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SchemeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scheme-detail',
  templateUrl: 'scheme-detail.html',
})
export class SchemeDetailPage {

  loading: any;
 req_data = {id: '',
            product: '',
            name: '',
            from_date: '',
            to_date: '',
            status: '',
            discount: '',
            scheme_type: ''
         };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
       this.req_data.id = this.navParams.get('id');
	   this.req_data.product = this.navParams.get('product');
	   this.req_data.name = this.navParams.get('name');
	   this.req_data.from_date = this.navParams.get('from_date');
	   this.req_data.to_date = this.navParams.get('to_date');
       this.req_data.status = this.navParams.get('status');
       this.req_data.discount = this.navParams.get('discount');
       this.req_data.scheme_type = this.navParams.get('scheme_type');
           console.log('ionViewDidLoad SchemeDetailPage');
  }
   public closeModal(){
     this.viewCtrl.dismiss();
  }

}
