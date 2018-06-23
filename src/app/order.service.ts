import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonApiService } from './json-api.service';
import { Order } from './order';
import { Observable } from 'rxjs';
import { tap, catchError, retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends JsonApiService<Order> {

  constructor(http: HttpClient) {
    super(http, 'api/orders');
  }

  getLatest(): Observable<Order[]> {
    const url = `${this.url}`;
    return this.http
      .get<Order[]>(url)
      .pipe(
        retry(3),
        map(orders => orders.slice(0, 3)),
        tap(_ => console.log('Get Latest Orders')),
        catchError(this.handleError<Order[]>('getLatest'))
      );
  }
}
