import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import { FILTER_CATEGORIES, FilterNode } from '../../data/categories';
import { PET_SUPPLY } from '../../data/products';import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-storefront',
  imports: [MatGridListModule, MatTreeModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './storefront.component.html',
  styleUrl: './storefront.component.scss'
})
export class StorefrontComponent {
 dataSource = FILTER_CATEGORIES;
 petSupplies = PET_SUPPLY;

  childrenAccessor = (node: FilterNode) => node.children ?? [];

  hasChild = (_: number, node: FilterNode) => !!node.children && node.children.length > 0;
}
