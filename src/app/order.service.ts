import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonApiService } from './json-api.service';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends JsonApiService<Order> {

  constructor(http: HttpClient) {
    super(http, 'api/orders');
  }
}
