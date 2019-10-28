import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { UsersComponent } from './header/users/users.component';
import { SliderComponent } from './body/slider/slider.component';
import { PubliComponent } from './body/publi/publi.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { Juego1Component } from './pildoras/juego1/juego1.component';
import { Juego2Component } from './pildoras/juego2/juego2.component';
import { ConnectComponent } from './body/connect/connect.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,
    SliderComponent,
    PubliComponent,
    LoginComponent,
    RegisterComponent,
    Juego1Component,
    Juego2Component,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
