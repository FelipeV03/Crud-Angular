import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// HttpClient es un servicio que nos permite hacer peticiones HTTP a una API REST desde Angular.
import { HttpClientModule } from '@angular/common/http';
// FormsModule es un modulo que nos permite trabajar con formularios en Angular.
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AddComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
