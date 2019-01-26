import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElementBoardComponent } from './element-board/element-board.component';
import { ElementComponent } from './element/element.component';




@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    ElementBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
