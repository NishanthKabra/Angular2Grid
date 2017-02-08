import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ng2-bootstrap/pagination';

import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { TableDemoComponent } from './home/table-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    Home,
    TableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    RouterModule.forRoot([
      {path: 'welcome', component: Home},
      {path: '**', component: Home}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}