\import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
<<<<<<< HEAD
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
=======
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { LocationTrackerProvider } from '../providers/location-tracker/location-tracker';
>>>>>>> 034d2c0f24521e8c31a5fe5f314913e292bf5f5e

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private locationAccuracy: LocationAccuracy, public locationTracker: LocationTrackerProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

       this.locationAccuracy.canRequest().then((canRequest: boolean) => {

         if(canRequest) {

          this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
           
          // error => alert('Error requesting location permissions'+JSON.stringify(error))
           );
           }

        });
       this.locationTracker.startTracking();
      });
  }
}

