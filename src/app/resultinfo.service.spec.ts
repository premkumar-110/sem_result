import { TestBed } from '@angular/core/testing';

import { ResultinfoService } from './resultinfo.service';

describe('ResultinfoService', () => {
  let service: ResultinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
