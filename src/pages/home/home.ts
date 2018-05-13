import { MusicPlayerPage } from '../music-player/music-player';
import { Component } from '@angular/core';
import { NavController , LoadingController,ActionSheetController, Icon, AlertController} from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';
import { YtProvider } from '../../providers/yt/yt';
import{SocialSharing} from "@ionic-native/social-sharing";
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observer } from 'rxjs/Observer';
import { PlaylistPage } from '../playlist/playlist';
import{Observable} from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  channelId='UC_x5XG1OV2P6uZZ5FSM9Ttw';
  palylists: Observable<any>;
public allMusic = [];
  constructor(public navCtrl: NavController, private musicProvider:MusicsProvider,public loadingController:LoadingController,private actionSheetController:ActionSheetController,private socialSharing: SocialSharing,private YtProvider:YtProvider ,private alertCtrl: AlertController) {
    console.log("inside home page");
  }
  searchPlaylist(){
    this.palylists=this.YtProvider.getPlaylistforchannel(this.channelId);
    this.palylists.subscribe(data =>{
      console.log('data:',data);
    },err =>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'No Playlist found for that channel Id',
        buttons: ['ok']
      });
      alert.present();
    
    });
  }
  OpenPlaylist(id){
this.navCtrl.push(PlaylistPage, {id: id});
  }
  ionViewDidLoad(){
    let allMusicLoadingController= this.loadingController.create({
      content:"getting your songs from server"
    });
    allMusicLoadingController.present();

    console.log("inside view did load")
    this.musicProvider.getMusic()
    .subscribe((musicList) =>{ 
      console.log(musicList, "api response");
      allMusicLoadingController.dismiss();
      this.allMusic=musicList;
    });
  }
  shareSong(music){
    let shareSongActionSheet = this.actionSheetController.create({
      title: "Share song",
      buttons:[
        {
          text: "Share on Facebook",
          icon: "logo-facebook",
          handler:()=>{
            this.socialSharing.shareViaFacebook(music.name,music.image,music.music_url)
          }
        },
        {
          text: "Twitter",
          icon:"logo-twitter",
          handler:()=>{
            this.socialSharing.shareViaTwitter(music.name,music.image,music.music_url)
          }
        },
        {
          text:"Share",
          icon: "share",
          handler:()=>{
            this.socialSharing.share(music.name,"",music.image,music.music_url)
          }
        },
        {
          text: "Cancel",
          role:"destructive"
        }

      ]
    });
    shareSongActionSheet.present();
  }
  goToMusic(music){
    this.navCtrl.push(MusicPlayerPage,{
      music: music
    });
  
   
  }
  
}
