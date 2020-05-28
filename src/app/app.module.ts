import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { HttpClientModule } from "@angular/common/http";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { TransactionLayoutComponent } from './layouts/transaction-layout/transaction-layout.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {AppServiceService} from './common/services/app-service.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { CapitalizeFirstPipe} from './shared/pipes/capitalfirst.pipe'

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TransactionLayoutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    HttpClientModule,
    NavbarModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
    FooterModule,
    FixedPluginModule
  ],
  providers: [AppServiceService],
  exports:[
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
