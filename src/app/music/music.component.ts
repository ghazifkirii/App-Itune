import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItuneService } from '../shared/itune-service';
import { Music } from '../shared/music';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  music: Music | null ;

  constructor(private router: Router, private route: ActivatedRoute, public itunemusicservice: ItuneService) {
    this.music = null
    this.route.params.subscribe((params => {
      if(params['musicId']) {
        console.log(params['musicId']);
        this.getMusic(params['musicId']);
        
      }
    }))
    
  }

  getMusic(musicId: string) {
    this.itunemusicservice.more_info(musicId)
      .pipe(
        map((data: any) => {
          const res: any = data;
          console.log(res.results);
          return res.results ? res.results : [];
        })
      )
      .subscribe((music) => this.music = music);
  }

  ngOnInit(): void {
  }
}