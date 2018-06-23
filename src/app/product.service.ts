import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonApiService } from './json-api.service';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends JsonApiService<Product> {

  constructor(http: HttpClient) {
    super(http, 'api/products');
  }

}
