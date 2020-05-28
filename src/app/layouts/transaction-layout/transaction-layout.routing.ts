import { Routes } from '@angular/router';
import { ListComponent } from '../../pages/transaction/list/list.component';
import { AddNewComponent } from '../../pages/transaction/add-new/add-new.component';
export const TransactionLayoutRoutes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddNewComponent },
  
];
