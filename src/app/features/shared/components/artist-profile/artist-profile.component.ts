import { Component, Input } from '@angular/core';
import { profile_interface } from '../../interfaces/artist.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-profile',
  imports: [CommonModule],
  templateUrl: './artist-profile.component.html',
  styleUrl: './artist-profile.component.scss',
})
export class ArtistProfileComponent {
  @Input({ alias: 'artistInfo' }) information: profile_interface | null = null;
}
