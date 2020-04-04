import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{PeopleService}from"../services/people.service"
import { MatTableDataSource } from '@angular/material/table';
import { PeopleFormComponent } from './people-form/people-form.component';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people;
  data;
  searchKey: string;
   displayedColumns: string[] = ["firstName", "lastName", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private PeopleService: PeopleService
  ) {}

  ngOnInit() {
    /*this.OrganizationsService.getOrganizations().subscribe(
      (Alcohols: []) => {
        console.log("organizations", organizations);
        this.organizations = new MatTableDataSource(organizations);
        this.organizations.sort = this.sort;
        this.organizations.paginator = this.paginator;
      }
      
    );*/
    this.people = new MatTableDataSource([{firstName:"n1",lastName:"l1"},{firstName:"n2",lastName:"l2"}]);
    this.people.sort = this.sort;
    this.people.paginator = this.paginator;
  }
  onAdd() {
    this.PeopleService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Human" };
    this.dialog.open(PeopleFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.PeopleService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Human" };

    this.dialog.open(PeopleFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    if (this.searchKey)
      this.people.filter = this.searchKey.trim().toLowerCase();
  }


}
