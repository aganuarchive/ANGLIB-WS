import { TestBed } from '@angular/core/testing';

import { SubitemService } from './subitem.service';

describe('SubitemService', () => {
  let service: SubitemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubitemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
