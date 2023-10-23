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
import {  ViewChild, ElementRef } from '@angular/core';

interface LoginResponse {
  otp:any;
  
}

@Component({
  selector: 'app-revaluation',
  templateUrl: './revaluation.component.html',
  styleUrls: ['./revaluation.component.css']
})
export class RevaluationComponent implements OnInit {
  @ViewChild('checkboxContainer') checkboxContainer!: ElementRef<HTMLDivElement>;
  myData: string[] = [];
  numChecked=0;
  selectedItems: { [key: string]: boolean } = {};
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  payableamount:any=0;
  getotp:any;
  OTP=12345;
  showverifyotp:boolean=false;
  showpayment:boolean=false;
  constructor(private router: Router ,private _snackBar: MatSnackBar ,private http: HttpClient,private ResultinfoService:ResultinfoService) {}

  ngOnInit() {
    const dataString = localStorage.getItem('failedsubject');
    if (dataString !== null) {
      const data = JSON.parse(dataString);
      this.myData = data;
    }
  }

  sendotp(){
    const checkboxes = this.checkboxContainer.nativeElement.querySelectorAll('input[type="checkbox"]:checked');
    this.numChecked = checkboxes.length;
    this.payableamount=this.numChecked*200;
    if(this.numChecked==0){
      this._snackBar.open('Please select atleast 1 subject to proceed...','Ok',{
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,duration: 2000
      });
    }
    else{
      this.showverifyotp=true;
      const failedsubjects=this.myData;
      const selectedKeys = Object.keys(this.selectedItems);
      localStorage.setItem('failedsubject',JSON.stringify(selectedKeys));
      this.http.post<LoginResponse>('http://localhost:5000/api/sendotp', { })
      .subscribe(response => {
        if (response.otp) {
          this.OTP=response.otp;
          
        } else {
          // Display error message
          console.log(response)
          this._snackBar.open('Cannot send otp','Ok',{
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
    verify_otp()
    {
      if(this.getotp==''){
        this._snackBar.open('Enter the OTP first...','Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,duration: 2000
        });
      }
      else{
      if(!this.showverifyotp){
        this._snackBar.open('OTP has not been sent','Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,duration: 2000
        });
      }
      if(this.OTP==this.getotp){
        this.showpayment=true;
        this._snackBar.open('Successfully verified','Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,duration: 2000
        });
      }
      else{
        this._snackBar.open('Invalid OTP','Ok',{
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,duration: 2000
        });
      }
    }
    }
    pay_amount(){
      this.router.navigate(['/photocopypayment']);
    }
}