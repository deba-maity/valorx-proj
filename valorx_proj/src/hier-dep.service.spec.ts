import { TestBed } from '@angular/core/testing';

import { HierDepService } from './hier-dep.service';

describe('HierDepService', () => {
  let service: HierDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HierDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
