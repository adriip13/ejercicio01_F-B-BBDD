import { TestBed } from '@angular/core/testing';

import { DonationService } from './donation-service.service';

describe('DonationServiceService', () => {
  let service: DonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
