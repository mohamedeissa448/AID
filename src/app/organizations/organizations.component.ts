import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizationService } from '../services/organizations.service';
import { OrgFormComponent } from './org-form/org-form.component';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent  {

   organizations;
  data;
  searchKey: string;
   displayedColumns: string[] = ["Name", "Location", "Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private OrganizationsService: OrganizationService
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
    this.organizations = new MatTableDataSource([{Name:"n1",Location:"l2",_id:1},{Name:"n2",Location:"l2",_id:2}]);
    this.organizations.sort = this.sort;
    this.organizations.paginator = this.paginator;
  }
  onAdd() {
    this.OrganizationsService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Organization" };
    this.dialog.open(OrgFormComponent, dialogConfig);
  }
  onEdit(element) {
    this.OrganizationsService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Organization" };

    this.dialog.open(OrgFormComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    if (this.searchKey)
      this.organizations.filter = this.searchKey.trim().toLowerCase();
  }

  

}
