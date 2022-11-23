import { TestBed } from '@angular/core/testing';

import { AlmacenesServiceService } from './almacenes-service.service';

describe('AlmacenesServiceService', () => {
  let service: AlmacenesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlmacenesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
