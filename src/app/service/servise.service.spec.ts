import { TestBed } from '@angular/core/testing';

import { ServiseService } from './servise.service';

describe('ServiseService', () => {
  let service: ServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
