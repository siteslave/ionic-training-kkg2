import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IUser } from '../../models';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  user: IUser;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.user = { id: null, name: null, email: null, group_id: null };
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
