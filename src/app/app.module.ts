import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from "@angular/common/http";
import { BlogComponent } from './blog/blog.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserlistComponent,
    BlogComponent,
    EmployeelistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
