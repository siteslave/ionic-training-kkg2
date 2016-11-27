import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  id: number;
  name: string;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('name');
  }

  ionViewDidLoad() {
    console.log('Hello DetailPage Page');
  }

}
