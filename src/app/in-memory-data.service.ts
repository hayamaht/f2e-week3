import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { OrderStatus } from './order-status.enum';
import { ProductStatus } from './product-status.enum';
import { Size } from './size.enum';
import { Product } from './product';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const orders = [{
      id: 1,
      customer: 'AAA',
      total: 3240,
      addedAt: new Date('2018/6/6'),
      checkoutedAt: new Date('2018/6/19'),
      phone: '12353',
      email: 'aaa@test.com',
      address: 'sdasdasdd',
      status: OrderStatus.Unpaid,
      products: [
        { name: 'bbbb', price: 1240, amount: 1 },
        { name: 'ccccc', price: 2000, amount: 1 },
      ]
    }, {
      id: 2,
      customer: 'Ceepefd afd',
      total: 1800,
      addedAt: new Date('2018/6/6'),
      checkoutedAt: new Date('2018/6/19'),
      phone: '12353',
      email: 'alex@test.com',
      address: 'sdasdasdd',
      status: OrderStatus.Paid,
      products: [
        { name: 'Aew casdasd', price: 900, amount: 1 },
        { name: 'AFasdasd', price: 900, amount: 1 },
      ]
    }];
    const products = [{
      id: 3,
      images: ['p1.jpg'],
      name: 'AAAA',
      price: 1200,
      discount: 0.9,
      inventories: [
        { size: Size.Large, color: 'Gary', amount: 10 },
        { size: Size.Large, color: 'Black', amount: 10 },
        { size: Size.Middle, color: 'Gary', amount: 10 },
        { size: Size.Middle, color: 'Black', amount: 10 },
        { size: Size.Small, color: 'Gary', amount: 10 },
        { size: Size.Small, color: 'Black', amount: 10 },
      ],
      status: ProductStatus.Draft,
    }, {
      id: 4,
      images: ['p1.jpg'],
      name: 'AAAA',
      price: 1200,
      discount: 0.9,
      inventories: [
        { size: Size.Large, color: 'Gary', amount: 10 },
        { size: Size.Large, color: 'Black', amount: 10 },
        { size: Size.Middle, color: 'Gary', amount: 10 },
        { size: Size.Middle, color: 'Black', amount: 10 },
        { size: Size.Small, color: 'Gary', amount: 10 },
        { size: Size.Small, color: 'Black', amount: 10 },
      ],
      status: ProductStatus.Draft,
    }, {
      id: 5,
      images: ['p1.jpg'],
      name: 'AAAA',
      price: 1200,
      discount: 0.9,
      inventories: [
        { size: Size.Large, color: 'Gary', amount: 10 },
        { size: Size.Large, color: 'Black', amount: 10 },
        { size: Size.Middle, color: 'Gary', amount: 10 },
        { size: Size.Middle, color: 'Black', amount: 10 },
        { size: Size.Small, color: 'Gary', amount: 10 },
        { size: Size.Small, color: 'Black', amount: 10 },
      ],
      status: ProductStatus.Draft,
    }, {
      id: 6,
      images: ['p1.jpg'],
      name: 'AAAA',
      price: 1200,
      discount: 0.9,
      inventories: [
        { size: Size.Large, color: 'Gary', amount: 10 },
        { size: Size.Large, color: 'Black', amount: 10 },
        { size: Size.Middle, color: 'Gary', amount: 10 },
        { size: Size.Middle, color: 'Black', amount: 10 },
        { size: Size.Small, color: 'Gary', amount: 10 },
        { size: Size.Small, color: 'Black', amount: 10 },
      ],
      status: ProductStatus.Draft,
    }, {
      id: 7,
      images: ['p1.jpg'],
      name: 'AAAA',
      price: 1200,
      discount: 0.9,
      inventories: [
        { size: Size.Large, color: 'Gary', amount: 10 },
        { size: Size.Large, color: 'Black', amount: 10 },
        { size: Size.Middle, color: 'Gary', amount: 10 },
        { size: Size.Middle, color: 'Black', amount: 10 },
        { size: Size.Small, color: 'Gary', amount: 10 },
        { size: Size.Small, color: 'Black', amount: 10 },
      ],
      status: ProductStatus.Draft,
    }, {
      id: 8,
      images: ['p1.jpg'],
      name: 'AAAA',
      price: 1200,
      discount: 0.9,
      inventories: [
        { size: Size.Large, color: 'Gary', amount: 10 },
        { size: Size.Large, color: 'Black', amount: 10 },
        { size: Size.Middle, color: 'Gary', amount: 10 },
        { size: Size.Middle, color: 'Black', amount: 10 },
        { size: Size.Small, color: 'Gary', amount: 10 },
        { size: Size.Small, color: 'Black', amount: 10 },
      ],
      status: ProductStatus.Draft,
    }];

    return { orders, products };
  }

}
