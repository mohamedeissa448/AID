import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule}from"@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import{ HttpClientModule}from"@angular/common/http";
import { OrganizationsComponent } from './organizations/organizations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CommonModule } from '@angular/common';
//anglar material
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { OrgFormComponent } from './organizations/org-form/org-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input'; 
import { OrganizationService } from './services/organizations.service';
import { PeopleComponent } from './people/people.component';
import { PeopleFormComponent } from './people/people-form/people-form.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    OrganizationsComponent,
    OrgFormComponent,
    PeopleComponent,
    PeopleFormComponent,
    UploadFileComponent
  ],
  imports: [

    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    
    
  ],
  providers: [OrganizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
