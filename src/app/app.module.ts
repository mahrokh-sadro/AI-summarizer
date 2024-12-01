import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; // 
import { FormsModule } from '@angular/forms';  // 
import { NgxSummernoteModule } from 'ngx-summernote';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule   ,
    NgxSummernoteModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
