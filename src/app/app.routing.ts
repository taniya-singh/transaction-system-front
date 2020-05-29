import { Routes } from '@angular/router';

import { TransactionLayoutComponent } from './layouts/transaction-layout/transaction-layout.component';
import { ListComponent } from './pages/transaction/list/list.component';

export const AppRoutes: Routes = [
  { path: '',   redirectTo: '/transaction/list', pathMatch: 'full' },
  {
    path: '',
    component: TransactionLayoutComponent,
    children: [
        {
      path: 'transaction',
      loadChildren: './layouts/transaction-layout/transaction-layout.module#AdminLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'login'
  }
]
