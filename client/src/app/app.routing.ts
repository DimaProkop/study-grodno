/**
 * Created by dionp on 22.02.2017.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./components/app/app.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { SpecialityComponent } from "./components/speciality/speciality.component";
import { AdminPanelComponent } from "./components/admin-panel/admin-panel.component";
import { SpecialityBuilderComponent } from "./components/speciality-builder/speciality-builder.component";
import { FacultyBuilderComponent } from "./components/faculty-builder/faculty-builder.component";
import { TreeViewComponent } from "./components/tree-view/tree-view.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'tags', component: SpecialityComponent },
  {
    path: 'admin', component: AdminPanelComponent, children: [
      { path: 'education-institution', component: TreeViewComponent }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }

