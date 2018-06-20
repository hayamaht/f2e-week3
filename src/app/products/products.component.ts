import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {

  products = new MatTableDataSource<Product>();
  selection = new SelectionModel<Product>(true, []);
  displayedColumns = [ 'select', 'name', 'price', 'discount', 'inventories', 'status' ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.products.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.products.data.forEach(row => this.selection.select(row));
  }

  getProducts() {
    this.productService
      .getAll()
      .subscribe(products => {
        this.products.data = products;
        this.products.paginator = this.paginator;
      });
  }

}
