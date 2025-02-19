import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable } from '@angular/core';
import { specific_artist } from '../interfaces/spec.artist.interface';
import { music_API_BASE } from '../consts/consts';
import { profile_interface } from '../interfaces/artist.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private readonly http = inject(HttpClient);

  constructor(@Inject(music_API_BASE) private API_URL: string) {}

  specificArtist(_id: number) {
    console.log(`${this.API_URL}/artist/${_id}`);
    return this.http.get<profile_interface>(`/api/artist/${_id}`);
  }
}
