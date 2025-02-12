import { Component, inject } from '@angular/core';
import { debounceTime, tap } from 'rxjs';
import {
  base_search,
  search_result,
} from '../shared/interfaces/base.res.interface';
import { MusicService } from '../shared/services/music.service';
import { podcast } from '../shared/interfaces/charts.interface';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { consumerMarkDirty } from '@angular/core/primitives/signals';
import { CardComponent } from '../shared/components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, ReactiveFormsModule, CardComponent, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  private readonly musicService = inject(MusicService);

  searchControl = new FormControl('', { nonNullable: true });

  // დროებით დატა ბაინდინგი
  base_response: podcast[] = [];
  response: search_result[] = [];

  constructor() {
    this.search();
    this.userSearch('niaz');
  }

  search() {
    this.searchControl.valueChanges.pipe(debounceTime(300)).subscribe((res) => {
      this.userSearch(res);
    });
  }

  userSearch(querry: string) {
    this.musicService.searchMusic(querry).subscribe((res) => {
      console.log(res.data);
      this.response = res.data;
    });
  }
}
