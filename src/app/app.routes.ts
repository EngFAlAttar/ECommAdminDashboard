import { Routes } from '@angular/router';
import { DashboardComponent } from './blocks/dashboard/dashboard.component';
import { ProductsStockComponent } from './blocks/logistics/products-stock/products-stock.component';
import { StorefrontComponent } from './blocks/storefront/storefront.component';
import { UserdashboardComponent } from './blocks/userdashboard/userdashboard.component';

export const routes: Routes = [

    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'logistics',
        component: ProductsStockComponent
    },
    {
        path: 'storefront',
        component:StorefrontComponent
    },
    {
        path: 'users',
        component: UserdashboardComponent
    }

];
