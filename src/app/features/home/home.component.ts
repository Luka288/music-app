import { Component, inject } from '@angular/core';
import { MusicService } from '../shared/services/music.service';
import { tap } from 'rxjs';
import {
  base_search,
  search_result,
} from '../shared/interfaces/base.res.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly musicService = inject(MusicService);

  // დროებით დატა ბაინდინგი
  base_response: base_search | null = null;
  response: search_result[] = [];

  constructor() {
    this.searchMusics();
  }

  searchMusics() {
    this.musicService
      .searchMusic()
      .pipe(
        tap((res) => {
          console.log(res);
          this.base_response = res;
          this.response = [...res.data];
          console.log(this.response);
        })
      )
      .subscribe();
  }
}
