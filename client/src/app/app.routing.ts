/**
 * paths for all components, and export providers
 * Dima Prokopovich on 22.02.2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./components/app/app.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {SpecialityComponent} from "./components/speciality/speciality.component";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {TreeViewComponent} from "./components/tree-view/tree-view.component";
import {SearchComponent} from "./components/search/search.component";
import {RequestComponent} from "./components/request/request.component";
import {EducationInstitutionComponent} from "./components/education-institution/education-institution.component";
import {BookmarksComponent} from "./components/bookmarks/bookmarks.component";
import {SpecialityDetailComponent} from "./components/speciality-detail/speciality-detail.component";
import {EducationInstitutionDetailComponent} from "./components/education-institution-detail/education-institution-detail.component";
import {FacultyComponent} from "./components/faculty/faculty.component";
import {NewsBuilderComponent} from "./components/news-builder/news-builder.component";
import {NewsComponent} from "./components/news/news.component";
import {SignUpComponent} from "./components/sign-up/sign-up.component";
import {NewsDetailComponent} from "./components/news-detail/news-detail.component";
import {MailDetailComponent} from "./components/mail-detail/mail-detail.component";
import {MailComponent} from "./components/mail/mail.component";
import {FooterComponent} from "./components/footer/footer.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'app', component: AppComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'mail', component: MailComponent},
  {path: 'mail/:id', component: MailDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'institution', component: EducationInstitutionComponent},
  {path: 'news/:id', component: NewsDetailComponent},

  {
    path: 'institution/:id', component: EducationInstitutionDetailComponent, children: [
    {path: '', redirectTo: 'description', pathMatch: 'full'},
    {path: 'speciality', component: SpecialityComponent},
    {path: 'faculty', component: FacultyComponent},
    {path: 'news', component: NewsComponent},
    {path: 'description', component: SpecialityComponent},
  ]
  },
  {path: 'speciality', component: SpecialityComponent},
  {path: 'speciality/:id', component: SpecialityDetailComponent},
  {
    path: 'admin', component: AdminPanelComponent, children: [
    {path: '', redirectTo: 'institution', pathMatch: 'full'},
    {path: 'institution', component: TreeViewComponent},
    {path: 'news', component: NewsBuilderComponent}
  ]
  },
  {
    path: 'summary', component: RequestComponent
  }
];

export const appRoutingProviders: any[] = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {
}

