import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsStockComponent } from "./products-stock/products-stock.component";
import { FilterComponent } from './blocks/filter/filter.component';
import { NavbarComponent } from './blocks/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsStockComponent, FilterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecomm';
}
