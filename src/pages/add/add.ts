import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { HomePage } from '../home/home';

import { IUser, IGroup, IHttpResult } from '../../models';

@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {

  groups: Array<IGroup>;
  user: IUser;

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController
  ) {
    this.user = { id: null, name: null, username: null, email: null, group_id: null };
  }

  ionViewDidLoad() {
    this.userProvider.getGroups()
      .then((data: IHttpResult) => {
        if (data.ok) {
          this.groups = <Array<IGroup>>data.groups;
        }
       }, err => {})
  }

  save() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'Please wait...'
    });

    loading.present();

    this.userProvider.save(this.user)
      .then((data: IHttpResult) => {
        loading.dismiss();
        if (data.ok) {
          // success
          this.navCtrl.pop(HomePage);
        }
      }, err => {
        loading.dismiss();
       });
    
  }

}
