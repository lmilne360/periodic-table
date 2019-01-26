import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { ElementTableComponent } from './element-table/element-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    ElementTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
