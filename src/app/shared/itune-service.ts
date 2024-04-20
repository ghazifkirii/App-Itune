import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app-config/app-config.module';
import { Music } from './music';
import {map} from 'rxjs/operators'

@Injectable()
export class ItuneService {

  public query: string = '';
  public music: Music[]
  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
    this.music = []
  }

  public searchMusic(queryTitle: string): void {
    this.query = queryTitle;
    this.http.get(`${this.config.apiEndpoint}search?term=${this.query}`).pipe(
      map(data => {
        const res: any = data;
        console.log(res.results);
        return res.results ? res.results : [];
      })
    ).subscribe((music) => this.music=music);
  }

  public more_info(musicId: String){
    return this.http.get(`${this.config.apiEndpoint}lookup/?id=${musicId}`);

  }

  public bookFactory(item: any): Music {
    return new Music(
      item.artistName,
      item.artistViewUrl,
      item.artwork30,
      item.artworkUrl60,
      item.artworkUrl100,
      item.trackId
    );
  }
}