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

@Component({
  selector: 'app-stafflogin',
  templateUrl: './stafflogin.component.html',
  styleUrls: ['./stafflogin.component.css']
})
export class StaffloginComponent {
  pass: any;
  mail: any;failed:any;
  s1:any;s2:any;s3:any;s4:any;s5:any;s6:any;s7:any;s8:any;s9:any;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor( private router: Router ,private _snackBar: MatSnackBar ,private http: HttpClient,private ResultinfoService:ResultinfoService) {}
  
  submitForm() {
    console.log(this.mail,this.pass);
    if (this.mail=='staff1@gmail.com' && this.pass=='123') {
      this.router.navigate(['/staff-1']);
      this._snackBar.open('Logging In...','Ok',{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,duration: 2000
      });
    } else {
      this._snackBar.open('Invalid Username or Password','Ok',{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,duration: 2000
      });
    }    
  }
}
