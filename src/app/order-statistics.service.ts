import { Injectable } from '@angular/core';
import { JsonApiService } from './json-api.service';
import { OrderStatistics } from './order-statistics';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderStatisticsService extends JsonApiService<OrderStatistics> {

  constructor(http: HttpClient) {
    super(http, 'api/order_statistics');
  }
}
