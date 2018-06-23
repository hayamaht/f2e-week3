import { Component, Inject } from '@angular/core';
import { Product } from '../product';
import { Size } from '../size.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {

  product = new Product();

  constructor(
    public dialogRef: MatDialogRef<EditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) { 
    this.addSpec();
  }

  saveDraft() {
    this.dialogRef.close();
  }

  publish() {
    this.dialogRef.close();
  }

  addSpec() {
    if(!this.product.inventories) {
      this.product.inventories = [];
    }

    this.product.inventories.push({
      size: Size.Large,
      color: '',
      amount: 10
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
