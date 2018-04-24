import { TestBed, inject } from '@angular/core/testing';

import { CanUserNavigateAwayConfService } from './can-user-navigate-away-conf.service';

describe('CanUserNavigateAwayConfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanUserNavigateAwayConfService]
    });
  });

  it('should be created', inject([CanUserNavigateAwayConfService], (service: CanUserNavigateAwayConfService) => {
    expect(service).toBeTruthy();
  }));
});
