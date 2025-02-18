import { Injectable } from '@angular/core';
import { chosenGenre } from '../interfaces/genres.interface';

@Injectable({
  providedIn: 'root',
})
export class UserGenreService {
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
