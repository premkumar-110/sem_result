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
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  pass: any;
  mail: any;failed:any;
  s1:any;s2:any;s3:any;s4:any;s5:any;s6:any;s7:any;s8:any;s9:any;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";

  constructor( private router: Router ,private _snackBar: MatSnackBar ,private http: HttpClient,private ResultinfoService:ResultinfoService) {}
  
  submitForm() {
    console.log(this.mail,this.pass);
    this.http.post<LoginResponse>('http://127.0.0.1:5000/api/login', { regno: this.mail, password: this.pass })
      .subscribe(response => {
        if (response.regno) {
          localStorage.setItem('failedsubject',response.failed);
          console.log(response.failed);
          this.ResultinfoService.s1=response.s1;
          this.ResultinfoService.s2=response.s2;
          this.ResultinfoService.s3=response.s3;
          this.ResultinfoService.s4=response.s4;
          this.ResultinfoService.s5=response.s5;
          this.ResultinfoService.s6=response.s6;
          this.ResultinfoService.s7=response.s7;
          this.ResultinfoService.s8=response.s8;
          this.ResultinfoService.s9=response.s9;
          this.ResultinfoService.count=response.count;
          this.ResultinfoService.name=response.name;
          this.ResultinfoService.regno=response.regno;
          this.ResultinfoService.photocopyapplied=response.photocopy;
          this.ResultinfoService.revaluationapplied=response.revaluation;
          this.router.navigate(['/dashboard']); 
          
        } else {
          // Display error message
          console.log(response)
          
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
