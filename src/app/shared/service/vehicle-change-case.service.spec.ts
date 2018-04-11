import { TestBed, inject } from '@angular/core/testing';

import { VehicleChangeCaseService } from './vehicle-change-case.service';

describe('VehicleChangeCaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleChangeCaseService]
    });
  });

  it('should be created', inject([VehicleChangeCaseService], (service: VehicleChangeCaseService) => {
    expect(service).toBeTruthy();
  }));
});
