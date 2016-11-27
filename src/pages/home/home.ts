import { Component } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { AddPage } from '../add/add';

import { UserProvider } from '../../providers/user';
import { IUser, IHttpResult } from '../../models/iuser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Array<IUser>;

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController
  ) {
  }

  goAdd() {
    this.navCtrl.push(AddPage);
  } 
  
  goDetail(user: IUser) {
    this.navCtrl.push(DetailPage, {user: user});
  }

  getUsers() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'Please wait...'
    });

    loading.present();
    
    this.userProvider.getUsers()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.users = <Array<IUser>>data.rows;
        }
        loading.dismiss();

      }, err => {
        console.error(err);
        loading.dismiss();
       })
  }

  ionViewDidEnter() {
    this.getUsers();
  }

}
