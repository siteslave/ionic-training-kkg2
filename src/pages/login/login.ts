import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user';
import { IHttpResult } from '../../models';

import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, private storage: Storage, private userProvider: UserProvider) {

    /*
      storage.set('name', 'Max');
     storage.get('name').then((val) => {
       console.log('Your name is', val);
     })
    */
  }

  ionViewDidEnter() {
    let fullname = localStorage.getItem('fullname');
    if (fullname) {
      this.navCtrl.setRoot(TabsPage);
    }
  }

  login() {
    this.userProvider.login(this.username, this.password)
      .then((data: IHttpResult) => {
        if (data.ok) {
          localStorage.setItem('fullname', data.fullname);
          //localStorage.removeItem('fullname');
          this.navCtrl.setRoot(TabsPage);
        } else {
          alert('Login failed!')
        }
       }, err => {
         console.log(err);
      });
  }  
}
