import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgxAudioPlayerModule } from '@le2xx/ngx-audio-player';
import { player_info } from '../../interfaces/music.interface';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VolumeControlDirective } from '../../directive/volume-control.directive';

@Component({
  selector: 'app-music-player',
  imports: [
    NgxAudioPlayerModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss',
})
export class MusicPlayerComponent {
  @Input({ alias: 'musicPreview' }) getMusic!: player_info;

  constructor() {}
}
