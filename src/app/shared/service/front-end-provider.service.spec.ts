import { TestBed, inject } from '@angular/core/testing';

import { FrontEndProviderService } from './front-end-provider.service';

describe('FrontEndProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrontEndProviderService]
    });
  });

  it('should be created', inject([FrontEndProviderService], (service: FrontEndProviderService) => {
    expect(service).toBeTruthy();
  }));
});
