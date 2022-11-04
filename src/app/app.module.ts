import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    ZXingScannerModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }