import { Component, inject } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { search_result } from '../shared/interfaces/base.res.interface';
import { MusicService } from '../shared/services/music.service';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';
import { genres } from '../shared/interfaces/genre.interface';
import { UserGenreService } from '../shared/services/user-genre.service';
import { chosenGenre } from '../shared/interfaces/genres.interface';
import { ArtistCardComponent } from '../shared/components/artist-card/artist-card.component';
import { full_artist_data } from '../shared/interfaces/charts.interface';
import { ArtistService } from '../shared/services/artist.service';
import { ArtistProfileComponent } from '../shared/components/artist-profile/artist-profile.component';
import { profile_interface } from '../shared/interfaces/artist.interface';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    CommonModule,
    ArtistCardComponent,
    ArtistProfileComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private readonly musicService = inject(MusicService);
  private readonly genreService = inject(UserGenreService);
  private readonly artistService = inject(ArtistService);

  searchControl = new FormControl('', { nonNullable: true });

  searchResults$ = new Subject<search_result[]>();
  genres$ = new Subject<genres[]>();
  chosenGenre$ = new Subject<chosenGenre[]>();
  artist$ = new Subject<full_artist_data[]>();
  profile$ = new Subject<profile_interface>();

  filterOpen: boolean = false;

  constructor() {}

  ngOnInit() {
    this.search();
    this.userSearch('niaz');
    this.getGenres();
  }

  userSearch(querry: string) {
    this.musicService.searchMusic(querry).subscribe((res) => {
      this.searchResults$.next(res.data);
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
    });
  }

  addGenre(genre: chosenGenre) {
    this.genreService.addGenre(genre);

    if (this.genreService.userGenres.length > 0) {
      this.chosenGenre$.next(this.genreService.userGenres);
    }
    this.filterByGenre(genre.id);
  }

  filterByGenre(genreID: number) {
    this.musicService.musicByGenres(genreID).subscribe((res) => {
      this.artist$.next(res.data);
      console.log(res);
    });
  }

  removeGenre(item: chosenGenre) {
    this.genreService.removeGenre(item);
    this.chosenGenre$.next(this.genreService.userGenres);
  }

  fetchSpecArtist(_id: number) {
    this.artistService.specificArtist(_id).subscribe((res) => {
      console.log(res);
      this.profile$.next(res);
    });
  }

  toggleFilter() {
    this.filterOpen = !this.filterOpen;
    console.log(this.filterOpen);
  }
}
