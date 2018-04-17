import { TestBed, inject } from '@angular/core/testing';

import { CanUserNavigateAwayService } from './can-user-navigate-away.service';

describe('CanUserNavigateAwayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanUserNavigateAwayService]
    });
  });

  it('should be created', inject([CanUserNavigateAwayService], (service: CanUserNavigateAwayService) => {
    expect(service).toBeTruthy();
  }));
});
