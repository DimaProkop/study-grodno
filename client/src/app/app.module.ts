import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './components/app/app.component';
import {AppRouting} from "./app.routing";
import {LoginComponent} from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestComponent } from './components/request/request.component';
import { EducationInstitutionComponent } from './components/education-institution/education-institution.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { InstituionDetailComponent } from './components/instituion-detail/instituion-detail.component';
import {HomeService} from "./service/home/home.service";
import { SpecialityComponent } from './components/speciality/speciality.component';
import {FacultyService} from "./service/faculty/faculty.service";
import {UniversityService} from "./service/university/university.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RequestComponent,
    EducationInstitutionComponent,
    InstitutionComponent,
    InstituionDetailComponent,
    SpecialityComponent,
  ],
  providers: [HomeService, FacultyService, UniversityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
