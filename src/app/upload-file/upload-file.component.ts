import { Component, OnInit } from '@angular/core';
import{FileUploadService}from"../services/file-upload.service"
import { NotificationsService } from '../services/notifications.service';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent  {
  fileToUpload:File=null;
  constructor(private FileUploadService:FileUploadService,
    private notificationService:NotificationsService) { }
  handleFileInput(files:FileList){
    this.fileToUpload=files.item(0)
    console.log("this.fileToUpload",this.fileToUpload)
  }
  uploadFileToActivity(){
    console.log('here')
    this.FileUploadService.postFile(this.fileToUpload).subscribe(data=>{
      console.log("data from serve",data)
      this.notificationService.success('File Uploaded Successfully')
    },error=>{
      alert("file didnot upload")
    })
  }
  

}
