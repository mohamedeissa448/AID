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
    formData.append('fileKey',file,file.name);
    return this.http.post(endPoint,formData)
    .pipe(map(()=>{return true;}))
    
  }
}
