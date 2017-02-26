import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './component/app/app.component';
import {AppRouting} from "./app.routing";
import {HomeComponent} from "./component/home/home.component";
import {LoginComponent} from './component/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
