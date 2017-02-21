import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JsonpModule } from '@angular/http';
import { HttpService } from './http.service';

import { ModalModule, CarouselModule, CollapseModule } from 'ng2-bootstrap';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // HttpModule
    JsonpModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [
    HttpService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
