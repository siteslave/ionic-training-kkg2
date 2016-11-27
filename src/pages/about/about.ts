import { Component } from '@angular/core';
import { Push } from 'ionic-native';
import { UserProvider } from '../../providers/user';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private userProvider: UserProvider) {

  }

  register() {
    var push = Push.init({
      android: {
        senderID: '79081740039'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    });

    push.on('registration', (response) => {
      console.log(response);
      this.userProvider.registerToken(response.registrationId)
        .then((data) => {
          alert(JSON.stringify(data));
        }, err => {
          alert(JSON.stringify(err));
        })
    });

    push.on('notification', (data) => {
      console.log(data);
      //alert(JSON.stringify(data.additionalData));
    })

 
  }


}
