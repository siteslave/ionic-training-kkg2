import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
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
    private userProvider: UserProvider) {
  }

  goDetail() {
    this.navCtrl.push(DetailPage, {id: '1', name: 'John Doe'});
  }

  getUsers() {
    this.userProvider.getUsers()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.users = <Array<IUser>>data.rows;
        }
      }, err => {
        console.error(err);
       })
  }

  ionViewDidLoad() {
    this.getUsers();
  }

}
