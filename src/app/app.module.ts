import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransformPipe } from './pipes/transform.pipe';
import { JSON_API_URL, MOK_API_URL } from './tokens/tokens';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { FontDirective } from './directives/font.directive';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    TransformPipe,
    NavbarComponent,
    FeaturesComponent,
    AboutComponent,
    HomeComponent,
    FontDirective,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MOK_API_URL, useValue: 'http://localhost:3000/data'},
    {provide: JSON_API_URL, useValue: 'https://jsonplaceholder.typicode.com/users'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
