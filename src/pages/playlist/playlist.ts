import { VideoPage } from './../video/video';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { YtProvider } from '../../providers/yt/yt';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
videos : Observable<any>
public items;
public list: any;
constructor(public navCtrl: NavController, public navParams: NavParams, private ytProvider: YtProvider,private Youtube: YoutubeVideoPlayer) {
  //  let listId = this.navParams.get('id'); 
  //  this.videos =this.YtProvider.getListVideos(listId);
  console.log("inside constructor");
}
  public searchQuery = "";

 openVide(video){

  window.open('https://wwww.youtube.com/watch?v=' + video.snippet.resourceId.videoId);

 }

 getGooglevideo(){
   console.log("Getting video");
  this.ytProvider.getGoogleVideos().subscribe((res) => {
    console.log(res, "google videos output");
    this.items = res['items'];
  });
 }

 searchYoutube(){
   
   this.ytProvider.youtubeSearch(this.searchQuery).subscribe(res => {
    this.list = res['items'];
    
   })
  }

  playVideo(id){
    this.ytProvider.getVideo(id).subscribe(res => {
      console.log(res);
      this.Youtube.openVideo(res['items'][0].id)
      this.ytProvider.currentVideo = res['items'][0].player.embedHtml;
      console.log(this.ytProvider.currentVideo)
      
      // window.open('https://www.youtube.com/watch?v=' + res['items'][0].id);
      // this.navCtrl.push(VideoPage);
    })
  }
}