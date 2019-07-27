import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Drop1Component } from './drop1/drop1.component';
import { Drop2Component } from './drop2/drop2.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    Drop1Component,
    Drop2Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
