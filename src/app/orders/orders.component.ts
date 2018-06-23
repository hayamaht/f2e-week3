import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { MatTableDataSource } from '@angular/material';
import { ListComponent } from '../list-component';
import { OrderStatus } from '../order-status.enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends ListComponent<Order> implements OnInit {

  get orders(): MatTableDataSource<Order> {
    return this.dataSource;
  }

  orderStatuses = [ 
    OrderStatus.Unpaid,
    OrderStatus.Paid,
    OrderStatus.Shipping,
    OrderStatus.Done
  ];

  constructor(service: OrderService) {
    super(
      [ 'select', 'customer', 'products', 'total', 'addedAt', 'checkoutedAt', 'address', 'status' ],
      service
    );
  }

  ngOnInit() {
    this.getData();
  }
}
