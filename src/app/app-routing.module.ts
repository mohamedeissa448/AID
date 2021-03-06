import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { PeopleComponent } from './people/people.component';
import { UploadFileComponent } from './upload-file/upload-file.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'organizations',
    component:OrganizationsComponent
  },
  {
    path:'people',
    component:PeopleComponent
  },
  {
    path:'file/upload',
    component:UploadFileComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
