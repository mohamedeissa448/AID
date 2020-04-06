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
      "اسم الام وشهرتها": new FormControl("",[Validators.required]),
      "اسم الاب": new FormControl("", [Validators.required]),
      "الشهره": new FormControl("",[Validators.required]),
      "الأسم": new FormControl("", [Validators.required]),
 
 
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getPeople() {
    return this.http.get(`${settings.serverUrl}/aidedPeople/getAllAidedPeople`);
  }
  addHuman(newHuman) {
    console.log("added", newHuman);
    //newHuman contains _id,which we canot send
    return this.http.post(`${settings.serverUrl}/aidedPeople/addHuman`, {
      "اسم الام وشهرتها":newHuman["اسم الام وشهرتها"],
      "اسم الاب":newHuman["اسم الاب"],
      "الشهره": newHuman["الشهره"] ,
      "الأسم": newHuman["الأسم"],
    });
  }
  updateHuman(updatedHuman) {

    console.log("updated", updatedHuman);
    return this.http.post(`${settings.serverUrl}/aidedPeople/editHumanById`, updatedHuman);
  }
  popualteForm(Human) {
    console.log("Human", Human);
    this.form.setValue({
      _id: Human._id||"",
      "اسم الام وشهرتها":Human["اسم الام وشهرتها"],
      "اسم الاب":Human["اسم الاب"],
      "الشهره": Human["الشهره"] ,
      "الأسم": Human["الأسم"],
      
    });
  }
}
