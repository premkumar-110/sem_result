import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ResultinfoService} from '../resultinfo.service'
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface LoginResponse {
  status:any;
}
@Component({
  selector: 'app-photocopy-payment',
  templateUrl: './photocopy-payment.component.html',
  styleUrls: ['./photocopy-payment.component.css']
})
export class PhotocopyPaymentComponent implements OnInit{
  constructor( private router: Router ,private _snackBar: MatSnackBar ,private http: HttpClient,private ResultinfoService:ResultinfoService) {}
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  paytm=true;
  googlepay=true;
  amazonpay=true;
  showpayment=false;
  showpaymentbutton=true;
  file:any;
  filename:any;
  format:any;
  formfile: any;
  selectedFile: File | undefined;
  myData: string[] = [];
  ngOnInit(){
    const dataString = localStorage.getItem('failedsubject');
    if (dataString !== null) {
      const data = JSON.parse(dataString);
      this.myData = data;
    }
  }
  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile)
    if (this.selectedFile) {
      this.filename = this.selectedFile.name;
      this.format = this.selectedFile.name.split('.');
      console.log(this.format[this.format.length-1])
      const lastname=this.format[this.format.length-1];
      // this.format = this.format[1];
      if (lastname== 'png' || lastname == 'jpg' || lastname == 'jpeg' ) {
        
          this._snackBar.open("Successfully uploaded...", "Close", {horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition, duration: 3000 });
        
      } else {
        this._snackBar.open("Please upload only the jpg or png or jpeg images", "Close", {horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, duration: 3000 });
          this.deleteFile();
      }
    }
  } catch () {
    this.deleteFile();
    console.log('No file was selected...');
  }
  
  deleteFile(){
    this.file = null; 
    this.format = null;
    this.filename = null;
    this.formfile.delete('file');
    // this.fileSelect
  }
  run1(){
    this.showpayment=true;
    this.showpaymentbutton=false;
  }

  run(){
   
      this.http.post<LoginResponse>('http://localhost:5000/api/register', {regno:this.ResultinfoService.regno,photo: true,subjects:this.myData })
      .subscribe(response => {
        console.log(this.ResultinfoService.regno);
        if (response.status) {
         
          this.router.navigate(['/']);
          this._snackBar.open('Payment Successful...Please Re-Login...','Ok',{
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,duration: 2000
          });
        } else {
          // Display error message
          console.log(response)
          this._snackBar.open('Invalid Payment','Ok',{
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,duration: 2000
          });
        }
      },
      error => {
        // Display an error message in a snackbar
        this._snackBar.open('An error occurred while Paying in. Please Try again Later', 'Close', {
          duration: 3000
        });
      }
      );
  
    }
    
}
