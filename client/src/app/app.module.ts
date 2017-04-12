import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { AppComponent } from './components/app/app.component';
import {AppRouting, appRoutingProviders} from "./app.routing";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestComponent } from './components/request/request.component';
import { EducationInstitutionComponent } from './components/education-institution/education-institution.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { InstituionDetailComponent } from './components/instituion-detail/instituion-detail.component';
import { HomeService } from "./service/home/home.service";
import { SpecialityComponent } from './components/speciality/speciality.component';
import { FacultyService } from "./service/faculty/faculty.service";
import { EducationInstitutionService } from "./service/education-institution/education-institution.service";
import { SpecialityBuilderComponent } from "./components/speciality-builder/speciality-builder.component";
import { SpecialityService } from "./service/speciality/speciality.service";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { FacultyBuilderComponent } from "./components/faculty-builder/faculty-builder.component";
import { EducationInstitutionBuilderComponent } from "./components/education-institution-builder/education-institution-builder.component";
import { TreeViewComponent } from "./components/tree-view/tree-view.component";
import { TreeModule } from "angular-tree-component";
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './components/search/search.component';
import {SearchService} from "./service/search/search.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    TreeModule,
    MultiselectDropdownModule,
    BrowserModule,
    ReactiveFormsModule
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
    AdminPanelComponent,
    SpecialityBuilderComponent,
    FacultyBuilderComponent,
    EducationInstitutionBuilderComponent,
    TreeViewComponent,
    SearchComponent

  ],
  providers: [
    HomeService,
    FacultyService,
    EducationInstitutionService,
    SpecialityService,
    appRoutingProviders,
    SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
