import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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
      "الأسم": new FormControl("", [Validators.required]),///
      "محل الولاده":new FormControl("", [Validators.required]),
      "تاريخ الولاده":new FormControl("", [Validators.required]),
      "الجنس":new FormControl("", [Validators.required]),
      "الوضع العائلي":new FormControl("", [Validators.required]),
      "اسم الزوج وشهرته":new FormControl("", [Validators.required]),
      "مكان القيد":new FormControl("", [Validators.required]),
      "رقم القيد(السجل المدني":new FormControl("", [Validators.required]),
      "القضاء للقيد":new FormControl("", [Validators.required]),
      "المحافظه للقيد":new FormControl("", [Validators.required]),
      "الجنسيه":new FormControl("", [Validators.required]),
      "العنوان":new FormArray([]),
      "عدد الأبناء":new FormControl("", [Validators.required]),
      "أقرباء-صله القربي":new FormControl("", [Validators.required]),
      "المساعدات المقدمه":new FormArray([]),
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
      "الأسم": newHuman["الأسم"],///
      "محل الولاده":newHuman[ "محل الولاده"],
      "تاريخ الولاده":newHuman["تاريخ الولاده"],
      "الجنس":newHuman["الجنس"],
      "الوضع العائلي":newHuman["الوضع العائلي"],
      "اسم الزوج وشهرته":newHuman["اسم الزوج وشهرته"],
      "مكان القيد":newHuman["مكان القيد"],
      "رقم القيد(السجل المدني":newHuman["رقم القيد(السجل المدني"],
      "القضاء للقيد":newHuman["القضاء للقيد"],
      "المحافظه للقيد":newHuman["المحافظه للقيد"],
      "الجنسيه":newHuman["الجنسيه"],
      "العنوان":newHuman["العنوان"],//schema
      "عدد الأبناء":newHuman["عدد الأبناء"],
      "أقرباء-صله القربي":newHuman[ "أقرباء-صله القربي"],
      "المساعدات المقدمه":newHuman["المساعدات المقدمه"]//schema
    });
  }
  updateHuman(updatedHuman) {
    console.log("updated", updatedHuman);
    return this.http.post(`${settings.serverUrl}/aidedPeople/editHumanById`, updatedHuman);
  }
  deleteHumanById(id) {
    //newHuman contains _id,which we canot send
    return this.http.post(`${settings.serverUrl}/aidedPeople/deleteHumanById`,{_id:id} );
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
