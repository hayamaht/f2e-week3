import { Injectable } from '@angular/core';
import { JsonApiService } from './json-api.service';
import { Transaction } from './transaction';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends JsonApiService<Transaction> {

  constructor(http: HttpClient) {
    super(http, 'api/transations');
  }
}
