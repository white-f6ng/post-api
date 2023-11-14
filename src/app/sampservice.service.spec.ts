import { TestBed } from '@angular/core/testing';

import { SampserviceService } from './sampservice.service';

describe('SampserviceService', () => {
  let service: SampserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
