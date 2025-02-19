import { Component, Input } from '@angular/core';
import { profile_interface } from '../../interfaces/artist.interface';

@Component({
  selector: 'app-artist-profile',
  imports: [],
  templateUrl: './artist-profile.component.html',
  styleUrl: './artist-profile.component.scss',
})
export class ArtistProfileComponent {
  @Input({ alias: 'artistInfo' }) information: profile_interface | null = null;
}
