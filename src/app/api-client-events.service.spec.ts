import { TestBed } from '@angular/core/testing';

import { ApiClientEventsService } from './api-client-events.service';

describe('ApiClientEventsService', () => {
  let service: ApiClientEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiClientEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
