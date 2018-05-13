import { MusicPlayerPage } from './../pages/music-player/music-player';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import{Media} from '@ionic-native/media';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import {VideoPage} from "../pages/video/video"
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import{SocialSharing} from "@ionic-native/social-sharing";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MusicsProvider } from '../providers/musics/musics';
import { YtProvider } from '../providers/yt/yt';
import { PlaylistPage } from '../pages/playlist/playlist';
import{HttpModule} from '@angular/http';
import{ YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage,
    PlaylistPage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MusicPlayerPage,
    PlaylistPage,
    VideoPage
  ],
  providers: [
    Media,
    SocialSharing,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MusicsProvider,
    YtProvider,
    YoutubeVideoPlayer
  ]
})
export class AppModule {}
