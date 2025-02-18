import { TestBed } from '@angular/core/testing';

import { UserGenreService } from './user-genre.service';

describe('UserGenreService', () => {
  let service: UserGenreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGenreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
