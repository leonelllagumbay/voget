import { TestBed, inject } from '@angular/core/testing';

import { CaseErrorService } from './case-error.service';

describe('CaseErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseErrorService]
    });
  });

  it('should be created', inject([CaseErrorService], (service: CaseErrorService) => {
    expect(service).toBeTruthy();
  }));
});
