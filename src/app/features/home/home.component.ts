import { Component, inject } from '@angular/core';
import { MusicService } from '../shared/services/music.service';
import { tap } from 'rxjs';
import {
  base_search,
  search_result,
} from '../shared/interfaces/base.res.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
