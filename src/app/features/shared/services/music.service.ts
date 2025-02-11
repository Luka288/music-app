import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { music_API_BASE } from '../consts/consts';
import { catchError, tap } from 'rxjs';
import { base_search } from '../interfaces/base.res.interface';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private readonly http = inject(HttpClient);

  constructor(@Inject(music_API_BASE) private API_URL: string) {}

  // სატესტოდ eminem უნდა შეიცვალოს მომხმარებლის search ის მიხედივთ
  searchMusic() {
    return this.http.get<base_search>(`${this.API_URL}/search?q=niaz`);
  }
}
