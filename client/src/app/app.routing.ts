/**
 * paths for all components, and export providers
 * Dima Prokopovich on 22.02.2017.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./components/app/app.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {SpecialityComponent} from "./components/speciality/speciality.component";
import {AdminPanelComponent} from "./components/admin-panel/admin-panel.component";
import {SpecialityBuilderComponent} from "./components/speciality-builder/speciality-builder.component";
import {FacultyBuilderComponent} from "./components/faculty-builder/faculty-builder.component";
import {TreeViewComponent} from "./components/tree-view/tree-view.component";
import {SearchComponent} from "./components/search/search.component";
import {RequestComponent} from "./components/request/request.component";
import {EducationInstitutionComponent} from "./components/education-institution/education-institution.component";
import {SpecialityDetailComponent} from "./components/speciality-detail/speciality-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tags', component: SpecialityComponent },
  { path: 'education/:id', component: EducationInstitutionComponent },
  { path: 'speciality', component: SpecialityComponent },
  { path: 'speciality/:id', component: SpecialityDetailComponent },
  {
    path: 'admin', component: AdminPanelComponent, children: [
    {path: '', redirectTo: 'education-institution', pathMatch: 'full'},
    {path: 'education-institution', component: TreeViewComponent}
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

