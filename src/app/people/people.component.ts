import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{PeopleService}from"../services/people.service"
import { MatTableDataSource } from '@angular/material/table';
import { PeopleFormComponent } from './people-form/people-form.component';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people;
  data;
  searchKey: string;
   displayedColumns: string[] = ["الاسم", "الشهره", "اسم الاب","اسم الام وشهرتها","Actions"];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private PeopleService: PeopleService
  ) {}

  ngOnInit() {
    this.initializeTabe()
  }
  initializeTabe(){
    this.PeopleService.getPeople().subscribe(
      (response: any) => {
        console.log("response", response);
        this.people = new MatTableDataSource(response.people);
        this.people.sort = this.sort;
        this.people.paginator = this.paginator;
      }  
    );
  }
  onAdd() {
    this.PeopleService.form.reset();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Add New Human" };
    this.dialog.open(PeopleFormComponent, dialogConfig);
    this.dialog.afterAllClosed.pipe(take(1)).subscribe(()=>{
      this.initializeTabe()
    })
  }
  onEdit(element) {
    this.PeopleService.popualteForm(element);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.data = { title: "Edit Human" };

    this.dialog.open(PeopleFormComponent, dialogConfig);
    this.dialog.afterAllClosed.pipe(take(1)).subscribe(()=>{
      this.initializeTabe()
    })
  }
  onDelete(element) {
    if(confirm("Are you sure you want to delete human?")){
      //delete a human
      console.log('deleted',element)
      this.PeopleService.deleteHumanById(element._id)
      .subscribe(()=>{
        
      })

    }
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
