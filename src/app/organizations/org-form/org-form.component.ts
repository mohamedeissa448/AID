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
        ).subscribe((response:any)=>{
          console.log('response',response);
          if(response.message==true)this.notificationService.success(":: Added Successfully");
          else this.notificationService.success(":: UnExpected Error");
        })
      } else if (this.title === "Edit Organization") {
        //update organization
        this.organizationsService.updateOrganization(
          this.organizationsService.form.value
        ).subscribe((response:any)=>{
          console.log('response',response);
          if(response.message==true)this.notificationService.success(":: Updated Successfully");
          else this.notificationService.success(":: UnExpected Error");
        })
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
