import { TestBed } from '@angular/core/testing';

import { LogisitcsService } from './logisitcs.service';

describe('LogisitcsService', () => {
  let service: LogisitcsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogisitcsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
