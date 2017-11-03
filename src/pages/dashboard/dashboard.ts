import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  posts: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.posts = [
      {
        author: "Paulo Dalmas",
        authorPic: "http://donatered-asset.s3.amazonaws.com/assets/default/default_user-884fcb1a70325256218e78500533affb.jpg",
        comments: 3,
        created: "03, Nov 2017",
        image: "http://via.placeholder.com/350x150",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet risus ipsum, a elementum odio dictum eu. Vivamus gravida convallis porttitor. Nulla a nulla dapibus, pulvinar ipsum at, ultrices ligula. Morbi semper tortor vel dui interdum, ut tristique nulla rutrum. Maecenas ornare orci tortor, a condimentum augue finibus in.",
        likes: 5,
        
        title: "Lorem ipsum",
      },
      {
        author: "Paulo Dalmas",
        authorPic: "http://donatered-asset.s3.amazonaws.com/assets/default/default_user-884fcb1a70325256218e78500533affb.jpg",
        comments: 10,
        created: "31, Oct 2017",
        image: "http://via.placeholder.com/350x150",
        likes: 15,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet risus ipsum, a elementum odio dictum eu. Vivamus gravida convallis porttitor. Nulla a nulla dapibus, pulvinar ipsum at, ultrices ligula. Morbi semper tortor vel dui interdum, ut tristique nulla rutrum. Maecenas ornare orci tortor, a condimentum augue finibus in.",
        title: "Lorem Ipsum dolor",
      },
      {
        author: "Paulo dalmas",
        authorPic: "http://donatered-asset.s3.amazonaws.com/assets/default/default_user-884fcb1a70325256218e78500533affb.jpg",
        comments: 0,
        created: "27, Oct 2017",
        image: "http://via.placeholder.com/350x150",
        likes: 28,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet risus ipsum, a elementum odio dictum eu. Vivamus gravida convallis porttitor. Nulla a nulla dapibus, pulvinar ipsum at, ultrices ligula. Morbi semper tortor vel dui interdum, ut tristique nulla rutrum. Maecenas ornare orci tortor, a condimentum augue finibus in.",
        title: "Lorem Ipsum Dolor In",
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  user = {
    pic: 'http://donatered-asset.s3.amazonaws.com/assets/default/default_user-884fcb1a70325256218e78500533affb.jpg',
    firstName: 'Paulo Roberto',
    lastName: 'Dalmas Júnior',
    chatCount: 9
  }



}
