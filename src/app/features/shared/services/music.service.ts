import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { music_API_BASE } from '../consts/consts';
import { catchError, tap } from 'rxjs';
import { base_search } from '../interfaces/base.res.interface';
import { chart } from '../interfaces/charts.interface';
import { genre } from '../interfaces/genre.interface';
import { genre_artist } from '../interfaces/artist.interface';
import { specific_artist } from '../interfaces/spec.artist.interface';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private readonly http = inject(HttpClient);

  constructor(@Inject(music_API_BASE) private API_URL: string) {}

  basePage() {
    return this.http.get<chart>(`${this.API_URL}/chart?limit=10`);
  }

  //&limit=10
  searchMusic(querry: string) {
    return this.http.get<base_search>(
      `${this.API_URL}/search?q=${querry}&limit=20`
    );
  }

  artistAlbum() {
    return this.http.get(`${this.API_URL}/search/album?q=niaz&limit=10`);
  }

  fetchCatergory() {
    return this.http.get<genre>(`/api/genre`);
  }

  musicByGenres(genreID: number) {
    return this.http.get<genre_artist>(`/api/genre/${genreID}/artists`);
  }
}
