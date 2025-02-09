import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { music_API_BASE } from './features/shared/consts/consts';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // კორს ერორის თავიდან ასაცილებლად ვიყენებ https://corsproxy.io/
    {
      provide: music_API_BASE,
      useValue: 'https://corsproxy.io/?https://api.deezer.com',
    },
    provideRouter(routes),
    provideHttpClient(withFetch()),
  ],
};
