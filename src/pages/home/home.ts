import { Component } from '@angular/core';

import { NavController, LoadingController, ActionSheetController } from 'ionic-angular';

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
    private loadingCtrl: LoadingController,
    private actionSheetCtrl: ActionSheetController
  ) {
  }

  presentActionSheet(user: IUser) {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'เมนูใช้งาน',
     buttons: [
       {
         text: 'ลบข้อมูล',
         icon: 'trash',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'ดูข้อมูล',
         icon: 'information-circle',
         handler: () => {
           this.navCtrl.push(DetailPage, {user: user});
         }
       },
       {
         text: 'แก้ไขข้อมูล',
         handler: () => {
          //  this.navCtrl.push(DetailPage, {user: user});
         }
       },
       {
         text: 'ยกเลิก',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
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
