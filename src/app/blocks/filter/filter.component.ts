import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import { FILTER_CATEGORIES, FilterNode } from '../../data/categories';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
class DynamicFlatNode {
  constructor(
    public item: string,
    public level = 1,
    public expandable = false,
    public isLoading = signal(false),
  ) {}
}
@Component({
  selector: 'app-filter',
  imports: [MatTreeModule, MatIconModule, MatButtonModule, MatExpansionModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  dataSource = FILTER_CATEGORIES;

  childrenAccessor = (node: FilterNode) => node.children ?? [];

  hasChild = (_: number, node: FilterNode) => !!node.children && node.children.length > 0;

}
