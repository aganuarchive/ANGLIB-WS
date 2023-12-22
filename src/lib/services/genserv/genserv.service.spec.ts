import { TestBed } from '@angular/core/testing';

import { GenservService } from './genserv.service';

describe('GenservService', () => {
  let service: GenservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
