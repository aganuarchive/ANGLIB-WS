import { TestBed } from '@angular/core/testing';

import { ExpLibService } from './exp-lib.service';

describe('ExpLibService', () => {
  let service: ExpLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
