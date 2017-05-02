import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import {AppComponent} from './components/app/app.component';
import {AppRouting, appRoutingProviders} from "./app.routing";
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {RequestComponent} from './components/request/request.component';
import {EducationInstitutionComponent} from './components/education-institution/education-institution.component';
import {HomeService} from "./service/home/home.service";
import {SpecialityComponent} from './components/speciality/speciality.component';
import {FacultyService} from "./service/faculty/faculty.service";
import {EducationInstitutionService} from "./service/education-institution/education-institution.service";
import {SpecialityBuilderComponent} from "./components/speciality-builder/speciality-builder.component";
import {SpecialityService} from "./service/speciality/speciality.service";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {FacultyBuilderComponent} from "./components/faculty-builder/faculty-builder.component";
import {EducationInstitutionBuilderComponent} from "./components/education-institution-builder/education-institution-builder.component";
import {TreeViewComponent} from "./components/tree-view/tree-view.component";
import {TreeModule} from "angular-tree-component";
import {MultiselectDropdownModule} from 'angular-2-dropdown-multiselect';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from './components/search/search.component';
import {FormOfEducationService} from "./service/form-of-education/form-of-education";
import {LevelOfEducationService} from "./service/level-of-education/level-of-education.service";
import {DirectionService} from "./service/direction/direction.service";
import {LanguageLearningService} from "./service/language-learning/language-learning.service";
import {SearchService} from "./service/search/search.service";
import {RequestService} from "./service/request/request.service";
import {SimpleSearchComponent} from "./components/simple-search/simple-search.component";
import {SpecialityDetailComponent} from "./components/speciality-detail/speciality-detail.component";
import {LoginService} from "./service/login/login.service";
import {userReducer} from "./reducers/user.reducer";
import {routerReducer, RouterStoreModule} from "@ngrx/router-store";
import {StoreModule} from "@ngrx/store";
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./service/auth/auth.service";
import {SignUpService} from "./service/signup/sign-up.service";
import {TranslateModule} from "@ngx-translate/core";
import {EducationInstitutionDetailComponent} from "./components/education-institution-detail/education-institution-detail.component";
import {FacultyComponent} from "./components/faculty/faculty.component";
import {NewsBuilderComponent} from "./components/news-builder/news-builder.component";
import {NewsService} from "./service/news/news.service";
import {NewsComponent} from "./components/news/news.component";
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {roleUserReducer} from "./reducers/role.reducer";
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {NewsDetailComponent} from "./components/news-detail/news-detail.component";

@NgModule({
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouting,
    TreeModule,
    MultiselectDropdownModule,
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.provideStore({routerReducer, userReducer, roleUserReducer}),
    RouterStoreModule.connectRouter(),
    TranslateModule.forRoot()
  ],
  declarations: [
    BookmarksComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    RequestComponent,
    EducationInstitutionComponent,
    EducationInstitutionDetailComponent,
    SpecialityComponent,
    AdminPanelComponent,
    SpecialityBuilderComponent,
    FacultyBuilderComponent,
    EducationInstitutionBuilderComponent,
    TreeViewComponent,
    SearchComponent,
    SimpleSearchComponent,
    SpecialityDetailComponent,
    FacultyComponent,
    NewsBuilderComponent,
    NewsComponent,
    NewsDetailComponent,
    SignUpComponent
  ],
  providers: [
    HomeService,
    FacultyService,
    EducationInstitutionService,
    SpecialityService,
    FormOfEducationService,
    LevelOfEducationService,
    DirectionService,
    LanguageLearningService,
    appRoutingProviders,
    SearchService,
    RequestService,
    LoginService,
    AuthGuard,
    AuthService,
    SignUpService,
    NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
