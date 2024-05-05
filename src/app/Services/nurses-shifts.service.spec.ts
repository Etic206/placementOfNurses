import { TestBed } from '@angular/core/testing';

import { NursesShiftsService } from './nurses-shifts.service';

describe('NursesShiftsService', () => {
  let service: NursesShiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursesShiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
