import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  animateOut: boolean = false;
  animateIn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.animateIn = true;
    this.animateOut = false;
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    
  }

  goRegister() {
    this.animateIn = false;
    this.animateOut = true;    
    setTimeout(() => this.navCtrl.setRoot(RegisterPage), 750);
  }
}
