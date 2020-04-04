import { Component, OnInit, Inject } from '@angular/core';
import{PeopleService}from"../../services/people.service"
import { NotificationsService } from 'src/app/services/notifications.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OrgFormComponent } from 'src/app/organizations/org-form/org-form.component';
@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  public title;
  constructor(
    public peopleService: PeopleService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<OrgFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.title = data.title;
  }

  ngOnInit() {}
  onClear() {
    this.peopleService.form.reset();
  }

  onSubmit() {
    if (this.peopleService.form.valid) {
      //on adding category
      if (this.title === "Add New Human") {
        this.peopleService.addHuman(
          this.peopleService.form.value
        ); /*.subscribe(() => {});*/
        this.notificationService.success(":: Added Successfully");
      } else if (this.title === "Edit Human") {
        //update dosing
        this.peopleService.updateHuman(
          this.peopleService.form.value
        );
        this.notificationService.success(":: Updated Successfully");
      }
      this.peopleService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.peopleService.form.reset();
    this.dialogRef.close();
  }

}
