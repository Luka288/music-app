import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { search_result } from '../../interfaces/base.res.interface';
import { NgxAudioPlayerModule } from '@le2xx/ngx-audio-player';
import { player_info } from '../../interfaces/music.interface';

@Component({
  selector: 'app-card',
  imports: [CommonModule, NgxAudioPlayerModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'base_input' }) information!: search_result;
  @Output() emitMusic = new EventEmitter<player_info>();

  musicUrl!: string;
  audio = new Audio();

  isPlaying: boolean = false;

  playButton(music: string) {
    this.audio.src = music;
    this.audio.volume = 0.01;
    if (!this.isPlaying) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.isPlaying = false;
    }

    this.audio.onended = () => {
      this.isPlaying = false;
    };
  }
}
