import { TestBed, inject } from '@angular/core/testing';

import { OverviewErrorService } from './overview-error.service';

describe('OverviewErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OverviewErrorService]
    });
  });

  it('should be created', inject([OverviewErrorService], (service: OverviewErrorService) => {
    expect(service).toBeTruthy();
  }));
});
