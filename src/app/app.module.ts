import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransformPipe } from './pipes/transform.pipe';
import { MOK_API_URL } from './tokens/tokens';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    TransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [{provide: MOK_API_URL, useValue: 'http://localhost:3000/data'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
