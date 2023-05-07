import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ThemePalette } from '@angular/material/core';
import {ResultinfoService} from '../resultinfo.service'

interface LoginResponse {
  failed: any;
  regno: any;
  success: boolean;
  message: string;
  exists:boolean;
  password:any;
  s1:any;s2:any;s3:any;s4:any;s5:any;s6:any;s7:any;s8:any;s9:any;
  count:any;
  name:any;
  photocopy:any;
  revaluation:any;
}
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  pass: any;
  mail: any;failed:any;
  s1:any;s2:any;s3:any;s4:any;s5:any;s6:any;s7:any;s8:any;s9:any;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor( private router: Router ,private _snackBar: MatSnackBar ,private http: HttpClient,private ResultinfoService:ResultinfoService) {}
  
  submitForm() {
    console.log(this.mail,this.pass);
    this.http.post<LoginResponse>('http://localhost:5000/api/adminlogin', { regno: this.mail, password: this.pass })
      .subscribe(response => {
        if (response.regno) {
          console.log(response.failed);
          this.router.navigate(['/admindashboard']);
          this._snackBar.open('Logging In...','Ok',{
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,duration: 2000
          });
        } else {
          // Display error message
          console.log(response)
          this._snackBar.open('Invalid Username or Password','Ok',{
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,duration: 2000
          });
        }
      },
      error => {
        // Display an error message in a snackbar
        this._snackBar.open('An error occurred while logging in. Please Try again Later', 'Close', {
          duration: 3000
        });
      }
      );
    
  }
}
