import { TestBed, inject } from '@angular/core/testing';

import { OrderStatisticsService } from './order-statistics.service';

describe('OrderStatisticsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderStatisticsService]
    });
  });

  it('should be created', inject([OrderStatisticsService], (service: OrderStatisticsService) => {
    expect(service).toBeTruthy();
  }));
});
