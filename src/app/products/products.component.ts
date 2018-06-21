import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatTableDataSource } from '@angular/material';
import { ListComponent } from '../list-component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent extends ListComponent<Product> implements OnInit {

  get products(): MatTableDataSource<Product> {
    return this.dataSource;
  }

  constructor(service: ProductService) {
    super(
      [ 'select', 'name', 'price', 'discount', 'inventories', 'status' ],
      service
    );
  }

  ngOnInit() {
    this.getData();
  }

}
