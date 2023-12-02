import { BrowserModule } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvestorMainComponent } from './investor-main/investor-main.component';
import { InvestorGridComponent } from './investor-main/investor-grid/investor-grid.component';
import { InvestorDetailComponent } from './investor-main/investor-detail/investor-detail.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';



import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend


import { BasicAuthInterceptor } from './helper/basic-auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    InvestorGridComponent,
    InvestorDetailComponent,
    LoginComponent,
    InvestorMainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    ProgressSpinnerModule,
    AccordionModule  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }

    // provider used to create fake backend
  
],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
