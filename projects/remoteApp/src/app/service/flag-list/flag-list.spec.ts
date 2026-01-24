import { TestBed } from '@angular/core/testing';

import { FlagListService } from './flag-list';

describe('flagList', () => {
  let service: FlagListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlagListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
