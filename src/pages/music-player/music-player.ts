import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{Media, MediaObject} from '@ionic-native/media';
/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
  private songMedia :MediaObject=null;
  private isMusicpause= false;
public music={};
  constructor(public navCtrl: NavController, public navParams: NavParams,private media:Media) {
    this.music= this.navParams.get("music");
  }

  ionViewDidLoad() {
    
  }
  playMusic(){
    if(this.songMedia == null){
      this.songMedia = this.media.create(this.music["music_url"]);
    this.songMedia.play();
    }else{
      if(this.isMusicpause == true){
        this.songMedia.play();
        this.isMusicpause= false;
      }
    }
  
  }
pauseMusic(){
  if(this.songMedia !== null){
  this.songMedia.pause();
  this.isMusicpause = true;
  }
}
stopMusic(){
  if(this.songMedia !== null){
    this.songMedia.stop();
    this.songMedia.release();
    this.songMedia = null;
    }
}
}
