import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap';
import { CarouselModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { TestCmpComponent } from './test-cmp/test-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCmpComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
