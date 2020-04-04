import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { settings } from '../config';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      firstName: new FormControl("",[Validators.required]),
      lastName: new FormControl("", [Validators.required]),
 
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getPeople() {
    return this.http.get(`${settings.serverUrl}/getPeople`);
  }
  addHuman(newHuman) {
    console.log("added", newHuman);
    return this.http.post(`${settings.serverUrl}/addHuman`, {
      firstName: newHuman.firstName,
      lastName: newHuman.lastName
    });
  }
  updateHuman(updatedHuman) {

    console.log("updated", updatedHuman);
    return this.http.post(`${settings.serverUrl}/editHuman`, {});
  }
  popualteForm(Human) {
    console.log("Human", Human);
    this.form.setValue({
      _id: Human._id||"",
      firstName: Human.firstName ,
      lastName: Human.lastName,
      
    });
  }
}
