import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { TransactionLayoutRoutes } from './transaction-layout.routing';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import {
  FormsModule, ReactiveFormsModule,
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { CapitalizeFirstPipe } from '../../shared/pipes/capitalizefirst.pipe'
import { ListComponent } from '../../pages/transaction/list/list.component';
import { AddNewComponent } from '../../pages/transaction/add-new/add-new.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TransactionLayoutRoutes),
    NgbModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  declarations: [
    ListComponent,
    AddNewComponent,
    CapitalizeFirstPipe
  ]
})

export class AdminLayoutModule { }
