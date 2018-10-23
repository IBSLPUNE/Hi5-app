import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PartialMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-partial-menu',
  templateUrl: 'partial-menu.html',
})
export class PartialMenuPage {

   bManager: any;
    bAdmin: any;
    bZone: any;

    menu: any = 'MenuPage';
    manager_menu: any = 'AgencyMenuPage';
    admin_menu: any = 'AdminMenuPage';
    zone_menu: any = 'ZoneMenuPage';



    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    /*swipeEvent(e) {
        if (e.direction == 2) {
            this.navCtrl.parent.select(1);
        }
        else if (e.direction == 4) {
            this.navCtrl.parent.select(0);
        }
    }*/

    /*swipeEvent(e) {
        if (e.direction == 2) {
            this.tab.select(1);
        }
        else if (e.direction == 4) {
            this.tab.select(0);
        }
    }*/

    ionViewDidLoad() {
        //console.log('ionViewDidLoad PartialMenuPage');
        if (localStorage.getItem('empRole') == 'SR') {
            this.bManager = false;
            this.bAdmin = false;
            this.bZone = false;
        }
        else if (localStorage.getItem('empRole') == 'Admin') {
            this.bAdmin = true;
            this.bManager = false;
            this.bZone = false;
        }
        else if (localStorage.getItem('empRole') == 'ASM'){
            this.bAdmin = false;
            this.bManager = false;
            this.bZone = true;

        }
        else {
            this.bManager = true;
            this.bAdmin = false;
        }
    }


}
