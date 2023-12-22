import { TestBed } from '@angular/core/testing';

import { ExpCfgLoginService } from './exp-cfg-login.service';

describe('ExpCfgLoginService', () => {
  let service: ExpCfgLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpCfgLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
