import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  imports: [CommonModule, RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  isOpen: boolean = false;

  toggleNav() {
    // ნავიგაციის toggle
    this.isOpen = !this.isOpen;
  }
}
