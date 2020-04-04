import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrganizationService } from 'src/app/services/organizations.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-org-form',
  templateUrl: './org-form.component.html',
  styleUrls: ['./org-form.component.css']
})
export class OrgFormComponent implements OnInit {

  public title;
  constructor(
    public organizationsService: OrganizationService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<OrgFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.title = data.title;
  }

  ngOnInit() {}
  onClear() {
    this.organizationsService.form.reset();
  }

  onSubmit() {
    if (this.organizationsService.form.valid) {
      //on adding category
      if (this.title === "Add New Organization") {
        this.organizationsService.addOrganization(
          this.organizationsService.form.value
        ); /*.subscribe(() => {});*/
        this.notificationService.success(":: Added Successfully");
      } else if (this.title === "Edit Organization") {
        //update dosing
        this.organizationsService.updateOrganization(
          this.organizationsService.form.value
        );
        this.notificationService.success(":: Updated Successfully");
      }
      this.organizationsService.form.reset();
      this.onClose();
    }
  }
  onClose() {
    this.organizationsService.form.reset();
    this.dialogRef.close();
  }
}
