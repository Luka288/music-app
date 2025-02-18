import { Component, inject } from '@angular/core';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { search_result } from '../shared/interfaces/base.res.interface';
import { MusicService } from '../shared/services/music.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { genre, genres } from '../shared/interfaces/genre.interface';
import { UserGenreService } from '../shared/services/user-genre.service';
import { chosenGenre } from '../shared/interfaces/genres.interface';

@Component({
  selector: 'app-search',
  imports: [FormsModule, ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private readonly musicService = inject(MusicService);
  private readonly genreService = inject(UserGenreService);

  searchControl = new FormControl('', { nonNullable: true });

  searchResults$ = new BehaviorSubject<search_result[]>([]);
  genres$ = new BehaviorSubject<genres[]>([]);
  chosenGenre$ = new BehaviorSubject<chosenGenre[]>([]);

  constructor() {
    this.search();
    this.userSearch('niaz');
    this.getGenres();
  }

  userSearch(querry: string) {
    this.musicService.searchMusic(querry).subscribe((res) => {
      this.searchResults$.next(res.data);
      console.log(res);
    });
  }

  search() {
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((res) => {
      if (res === '') return;
      this.userSearch(res);
    });
  }

  getGenres() {
    this.musicService.fetchCatergory().subscribe((res) => {
      this.genres$.next(res.data);
      console.log(res);
    });
  }

  addGenre(genre: chosenGenre) {
    this.genreService.addGenre(genre);

    if (this.genreService.userGenres.length > 0) {
      this.chosenGenre$.next(this.genreService.userGenres);
    }
  }

  removeGenre(item: chosenGenre) {
    this.genreService.removeGenre(item);
    this.chosenGenre$.next(this.genreService.userGenres);
  }
}
