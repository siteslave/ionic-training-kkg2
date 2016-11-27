import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IUser } from '../../models';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  options: any;
  options2: any;
  user: IUser;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.user = { id: null, name: null, email: null, group_id: null };
    this.user = this.navParams.get('user');
    console.log(this.user);

    this.options = {
      chart: {type: 'pie'},
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };

    this.options2 = {
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 66.4, 54.2],
      }]
    };
    
  }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
