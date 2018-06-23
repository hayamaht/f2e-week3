import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { Order } from '../order';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  latestOrders: Order[];
  transactions: Transaction[];

  constructor(
    private orderService: OrderService,
    private transactionService: TransactionService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {

    this.orderService
      .getLatest()
      .subscribe(orders => this.latestOrders = orders);

    this.transactionService
      .getAll()
      .subscribe(data => this.transactions = data);
  }

}
