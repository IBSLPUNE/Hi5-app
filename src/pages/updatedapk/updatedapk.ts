import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
//import { File } from '@ionic-native/file';

/**
 * Generated class for the UpdatedapkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updatedapk',
  templateUrl: 'updatedapk.html',
})
export class UpdatedapkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private transfer: FileTransfer) {
  }
  //, private file: File
  fileTransfer: FileTransferObject = this.transfer.create();

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatedapkPage');

    //const url = 'http://192.168.5.73:3000/api/user_auths/apk_link'; // /hrms/public/
  }
 // download() {
 // const url = 'Ayushi Ticket.pdf'; // /hrms/public/
 // this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
 //   console.log('download complete: ' + entry.toURL());
 // }, (error) => {
    // handle error
 // });
//}
}
 