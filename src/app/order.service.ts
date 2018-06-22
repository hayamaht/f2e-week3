import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonApiService } from './json-api.service';
import { Order } from './order';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService extends JsonApiService<Order> {

  constructor(http: HttpClient) {
    super(http, 'api/orders');
  }

  getLatest(): Observable<Order[]> {
    const url = `${this.url}/latest`;
    return this.http
      .get<Order[]>(url)
      .pipe(
        tap(_ => console.log()),
        catchError(this.handleError<Order[]>('getLatest'))
      );
  }
}
