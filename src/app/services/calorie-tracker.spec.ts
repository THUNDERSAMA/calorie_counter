import { TestBed } from '@angular/core/testing';

import { CalorieTracker } from './calorie-tracker';

describe('CalorieTracker', () => {
  let service: CalorieTracker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalorieTracker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
