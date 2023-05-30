import { TestBed } from '@angular/core/testing';

import { ApiAndCalistoService } from './api-and-calisto.service';

describe('ApiAndCalistoService', () => {
  let service: ApiAndCalistoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAndCalistoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
