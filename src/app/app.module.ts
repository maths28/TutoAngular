import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {ProductsListComponent} from "./products/products-list.component";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatGridListModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
