import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { settings } from "../config";

@Injectable({
  providedIn: "root"
})
export class OrganizationService {
   form: FormGroup;
  title: string;
  constructor(private http: HttpClient) {
    this.form = new FormGroup({
      _id: new FormControl(),
      Name: new FormControl(""),
      Location: new FormControl("", [Validators.required]),
     
    });
  }
  initializeFormGroup() {
    this.form.setValue({});
  }
  getOrganizations() {
    return this.http.get(`${settings.serverUrl}/getOrganizations`);
  }
  addOrganization(newOrganization) {
    console.log("added", newOrganization);
    return this.http.post(`${settings.serverUrl}/addOrganization`, {
      Pregnancy_Name: newOrganization.Pregnancy_Name,
      Pregnancy_Description: newOrganization.Pregnancy_Description
    });
  }
  updateOrganization(updatedOrganization) {

    console.log("updated", updatedOrganization);
    return this.http.post(`${settings.serverUrl}/editOrganization`, {});
  }
  popualteForm(Organization) {
    console.log("Organization", Organization);
    this.form.setValue({
      _id: Organization._id,
      Name: Organization.Name ,
      Location: Organization.Location,
    });
  }
}
