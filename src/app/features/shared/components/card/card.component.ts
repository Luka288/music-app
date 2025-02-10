import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { search_result } from '../../interfaces/base.res.interface';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ alias: 'base_input' }) information!: search_result;
}
