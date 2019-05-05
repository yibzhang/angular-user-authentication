import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const appRoutes = [
//  {path: '', component:}
];

@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule,
                  RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, LoginComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
