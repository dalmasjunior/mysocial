import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  animateIn: boolean = false;
  animateOut: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animateOut = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.animateIn = true;
  }

  goBack() {
    this.animateOut = true;
    setTimeout(() => this.navCtrl.setRoot(LoginPage),750);
  }

}
