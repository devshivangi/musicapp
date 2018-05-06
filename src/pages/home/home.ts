import { MusicPlayerPage } from '../music-player/music-player';
import { Component } from '@angular/core';
import { NavController , LoadingController,ActionSheetController, Icon} from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';
import{SocialSharing} from "@ionic-native/social-sharing";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic = [];
  constructor(public navCtrl: NavController, private musicProvider:MusicsProvider,public loadingController:LoadingController,private actionSheetController:ActionSheetController,private socialSharing: SocialSharing ) {
    console.log("inside home page");
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
