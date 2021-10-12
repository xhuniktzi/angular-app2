import { TestBed } from '@angular/core/testing';

import { BranchesApiService } from './branches-api.service';

describe('BranchesApiService', () => {
  let service: BranchesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
