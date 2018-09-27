import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
//import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

declare var google: any;
declare var cordova: any;

/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {
  
   geocoder: any;
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  public addr: any;
    onDevice: boolean;

  constructor(public platform: Platform, public http: HttpClient, public zone: NgZone, private backgroundGeolocation: BackgroundGeolocation, private geolocation: Geolocation, public toastCtrl: ToastController) {
     this.onDevice = this.platform.is('cordova');
  }
   startTracking() {
        if (this.onDevice) {
            // Background Tracking
            let config = {
                desiredAccuracy: 0,
                stationaryRadius: 20,
                distanceFilter: 10,
                debug: false,
                interval: 300000,
                startForeground: false,
                startOnBoot: true,
                stopOnTerminate: false,
                // Android only section
                /*locationProvider: ANDROID_ACTIVITY_PROVIDER,
                fastestInterval: 5000,
                activitiesInterval: 10000*/
            };

            this.backgroundGeolocation.configure(config).subscribe((location) => {
                console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);

                // Run update inside of Angular's zone
                this.zone.run(() => {
                    this.lat = location.latitude;
                    this.lng = location.longitude;
                    this.getAddress(true);

                    cordova.plugins.backgroundMode.setDefaults({
                        title: 'Hi5 App',
                        text: 'Active in background...'
                    });
                    cordova.plugins.backgroundMode.enable();
                });

            }, (err) => {
                console.log(err);
            });

            // Turn ON the background-geolocation system.
            this.backgroundGeolocation.start();
        }

        // Foreground Tracking
        let options = {
            frequency: 120000,
            enableHighAccuracy: true
        };

        this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
            console.log(position);

            // Run update inside of Angular's zone
            this.zone.run(() => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.getAddress(false);
            });
        });
    }

    stopTracking() {
        console.log('stopTracking');

        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    }

    /*getAddress(pos) {
        if (this.onDevice) {
            this.geocoder1.reverseGeocode(pos.coords.latitude, pos.coords.longitude).then((res: NativeGeocoderReverseResult) => {
                this.addr = JSON.stringify(res);
            });
        }
    }*/

    getAddress(bBG) {
        this.geocoder = new google.maps.Geocoder;
        let self = this;
        var latlng = { lat: this.lat, lng: this.lng };
        var request = { 'location': latlng };
        this.geocoder.geocode(request, (results, status) => {
            this.zone.run(() => {
                if (status === 'OK') {
                    if (results[0]) {
                        self.addr = results[0].formatted_address;
                    } else {
                        self.presentToast('No results found');
                    }
                } else {
                    /*if (bBG == true) {
                        self.presentToast('BG Geocoder failed due to: ' + status);
                    }
                    else {
                        self.presentToast('Geocoder failed due to: ' + status);
                    }*/
                }
            });
        });
    }
     presentToast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(() => {
            //console.log('Dismissed toast');
        });
        toast.present();
    }
}
