import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  artist_data,
  full_artist_data,
} from '../../interfaces/charts.interface';

@Component({
  selector: 'app-artist-card',
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.scss',
})
export class ArtistCardComponent {
  @Input({ alias: 'artistInput' }) artist: full_artist_data | null = null;
  @Output() emitId = new EventEmitter<number>();

  fetchSpecArtist(_id?: number) {
    this.emitId.emit(_id);
  }
}
