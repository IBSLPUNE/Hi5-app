import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
//import { MenuPage } from '../menu/menu';
import { PartialMenuPage } from '../partial-menu/partial-menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   loading: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
      this.settimeout();
  }
  settimeout() {
        setTimeout(() => {
            // this.navCtrl.popToRoot();
            // might try this instead
          
              if (localStorage.getItem('agent_id') == undefined) {
                this.navCtrl.setRoot(LoginPage);
            }
         
                else {
                if (localStorage.getItem('empRole') == 'Agent') {
                    this.navCtrl.setRoot(PartialMenuPage);
                }
                else if
                   (localStorage.getItem('empRole') == 'Admin') {
                    this.navCtrl.setRoot(PartialMenuPage);
                }
                else {
                    this.navCtrl.setRoot(PartialMenuPage);
                }
                }
        }, 2500);
    }

    showLoader() {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });

        this.loading.present();
    }
}
