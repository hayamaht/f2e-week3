import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { MatTableDataSource } from '@angular/material';
import { ListComponent } from '../list-component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent extends ListComponent<Order> implements OnInit {

  get orders(): MatTableDataSource<Order> {
    return this.dataSource;
  }

  constructor(service: OrderService) {
    super(
      [ 'customer', 'products', 'total', 'addedAt', 'checkoutedAt', 'address', 'status' ],
      service
    );
  }

  ngOnInit() {
    this.getData();
  }
}
