import { Injectable, OnInit } from "@angular/core";

import {MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar'; 

@Injectable({
  providedIn: "root"
})
export class NotificationsService implements OnInit {
  constructor(private snackBar: MatSnackBar) {}
  ngOnInit(): void {}
  success(msg) {
    this.snackBar.open(msg, "", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
}
