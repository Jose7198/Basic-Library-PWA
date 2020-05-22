import { TestBed } from '@angular/core/testing';

import { BillHttpService } from './bill-http.service';

describe('BillHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillHttpService = TestBed.get(BillHttpService);
    expect(service).toBeTruthy();
  });
});
