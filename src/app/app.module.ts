import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgPipesModule } from 'ngx-pipes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatTableModule,
  MatMenuModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatPaginatorModule,
  MatGridListModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatDialogModule,
  MAT_DATE_LOCALE,
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';
import { DurationPickerComponent } from './duration-picker/duration-picker.component';
import { HeaderComponent } from './header/header.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    ProductsComponent,
    DashboardComponent,
    DurationPickerComponent,
    HeaderComponent,
    StatisticsComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatPaginatorModule,
    MatGridListModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'zh-TW'},
  ],
  entryComponents: [ 
    EditProductComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
