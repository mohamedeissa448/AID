import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { settings } from "../config";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http:HttpClient) { }
  postFile(file:File):Observable<boolean>{
    const endPoint=`${settings.serverUrl}/files/upload`;
    const formData:FormData=new FormData();
    formData.append('file',file,file.name);
    console.log('form data',formData)
    return this.http.post(endPoint,formData)
    .pipe(map(()=>{return true;}))
    
  }
}
