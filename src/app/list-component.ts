import { MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ViewChild } from '@angular/core';
import { JsonApiService } from './json-api.service';

export abstract class ListComponent<T> {

  dataSource = new MatTableDataSource<T>();
  selection = new SelectionModel<T>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public displayedColumns: string[],
    protected dataService: JsonApiService<T>
  ) {}

  getData(): void {
    this.dataService
      .getAll()
      .subscribe(data => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
