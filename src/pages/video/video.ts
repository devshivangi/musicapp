import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YtProvider } from '../../providers/yt/yt';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {

  constructor(public navCtrl: NavController, public youtubeProvider: YtProvider ,public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log(this.youtubeProvider.currentVideo)
    console.log('ionViewDidLoad VideoPage');
  }

}
