import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { Injectable } from '@angular/core';
import "rxjs/add/operator/map";
/*
  Generated class for the YtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YtProvider {
apikey='AIzaSyAwLOfER5A87qvkvXYMebt499zM7GRKs5s';
searchResult;
currentVideo;  
constructor(public http: HttpClient) {
  }
  getPlaylistforchannel(channel){
return this.http.get('https://www.googleapis.com/youtube/v3/playlist?key=' +this.apikey + '&channelId=' + channel +'&part=snippet,id&maxResults=20')
.map(res =>{
  console.log(res, "response")
  return res;
})
}
  getListVideos(listId){
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' +this.apikey + '&palylistlId=' + listId +'&part=snippet,id&maxResults=20')
    .map((res : Response) =>{
      res.json();
    })
  }

  getGoogleVideos(){
    return this.http.get("https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key="+ this.apikey +"%20&part=snippet,contentDetails,statistics, player,status");
  }

  youtubeSearch(query){
    return this.http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + query + "&key=" + this.apikey)
  }

  getVideo(id){
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics%2C+player&id='+ id +'&key=' + this.apikey)
  }
}
