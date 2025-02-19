import { inject, Injectable } from '@angular/core';
import { chosenGenre } from '../interfaces/genres.interface';
import { HttpClient } from '@angular/common/http';
import { artist_data, full_artist_data } from '../interfaces/charts.interface';
import { genre_artist } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class UserGenreService {
  private readonly http = inject(HttpClient);

  userGenres: chosenGenre[] = [];

  addGenre(genre: chosenGenre) {
    this.userGenres = [
      {
        id: genre.id,
        name: genre.name,
      },
    ];

    console.log(this.userGenres);
  }

  removeGenre(genre: chosenGenre) {
    if (this.userGenres.length === 0) return;
    this.userGenres = this.userGenres.filter((item) => item.id !== genre.id);
  }
}
