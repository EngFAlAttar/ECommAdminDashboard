import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { PRODUCTS } from '../../../data/products';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { StockPipe } from '../../../pipes/stock.pipe';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-products-stock',
  imports: [MatGridListModule, MatCardModule, MatButtonModule, StockPipe, MatTableModule, MatFormFieldModule, MatInputModule , CurrencyPipe, StockPipe, MatIconModule],
  templateUrl: './products-stock.component.html',
  styleUrl: './products-stock.component.scss'
})
export class ProductsStockComponent {

  products = PRODUCTS;

  displayedColumns = Object.keys(this.products[0]);
  dataSource = new MatTableDataSource(this.products);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
