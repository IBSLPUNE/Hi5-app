import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
 loading: any;
 req_data = {id: '',
            code: '',
            name: '',
            description: '',
            status: '',
            price: ''
         };

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
       this.req_data.id = this.navParams.get('id');
	   this.req_data.code = this.navParams.get('code');
	   this.req_data.name = this.navParams.get('name');
	   this.req_data.description = this.navParams.get('description');
	   this.req_data.status = this.navParams.get('status');
     this.req_data.price = this.navParams.get('price');
           console.log('ionViewDidLoad ProductDetailPage');
  }
   public closeModal(){
     this.viewCtrl.dismiss();
  }

}
