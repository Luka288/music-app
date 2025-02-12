import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    title: 'Browse music | Home page',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
    title: 'Browse music | Home page',
  },

  {
    path: 'search',
    loadComponent: () =>
      import('./features/search/search.component').then(
        (c) => c.SearchComponent
      ),
    title: 'Search desired music',
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];
