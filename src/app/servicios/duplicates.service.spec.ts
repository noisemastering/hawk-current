import { TestBed } from '@angular/core/testing';

import { DuplicatesService } from './duplicates.service';

describe('DuplicatesService', () => {
  let service: DuplicatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuplicatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
