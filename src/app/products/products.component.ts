import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ListComponent } from '../list-component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent extends ListComponent<Product> implements OnInit {

  get products(): MatTableDataSource<Product> {
    return this.dataSource;
  }

  constructor(service: ProductService, public dialog: MatDialog) {
    super(
      [ 'select', 'name', 'price', 'discount', 'inventories', 'status' ],
      service
    );
  }

  ngOnInit() {
    this.getData();
  }

  createProduct() {
    let dialogRef = this.dialog.open(EditProductComponent, {
      width: '940px',
      data: new Product(),
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
