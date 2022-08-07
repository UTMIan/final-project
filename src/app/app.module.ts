import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './pages/crud/crud.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrarEComponent } from './pages/crud/registrar-e/registrar-e.component';
import { ActualizarEComponent } from './pages/crud/actualizar-e/actualizar-e.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    NavbarComponent,
    RegistrarEComponent,
    ActualizarEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
