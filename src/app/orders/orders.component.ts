import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: Order[];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderService
      .getAll()
      .subscribe(orders => this.orders = orders);
  }
}
