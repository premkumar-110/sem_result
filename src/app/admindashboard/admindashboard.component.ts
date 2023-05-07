import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatMenuPanel } from '@angular/material/menu';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ResultinfoService } from '../resultinfo.service';
interface LoginResponse {
  details:any;
  dept1:any;
  name:any;
  regno:any;
  s1:any;
}
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  
  ngOnInit(): void {
      
  }
  planname: any;
  container!: ElementRef;
  constructor(private dialogRef:MatDialog,private router: Router,private _snackBar: MatSnackBar,private http: HttpClient,private ResultinfoService:ResultinfoService,private elRef: ElementRef) {}
  filesent:boolean=false;
  filename: any;
  format: any;
  formfile: any;
  file:any;
  showLoader: boolean = false;
  planperiod:string='';
  isLoading1:boolean=false;
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  departmentname:any="Choose the Department";
  myData: any[] = [];
  onFileSelect(event: any) {
    try {
       this.file = event.target.files[0];
      if (this.file) {
        this.filename = this.file.name;
        this.format = this.file.name.split('.');
        // this.format = this.format[1];
        if (this.format[1] != 'csv') {
          this._snackBar.open("Please select only CSV file", "Close", {horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition, duration: 3000 });
          this.deleteFile();
        } else {
          
          console.log(this.formfile);
        }
      }
    } catch (error) {
      this.deleteFile();
      console.log('no file was selected...');
    }
  }
  successfileupload:boolean=false;
  fileUpload() {
    this.formfile = new FormData();
          this.formfile.append('file', this.file);
    if (this.file) {
      console.log(this.planperiod);
      this.showLoader = true;
      let url = "http://localhost:5000/api/file_upload"
      this.http.post(url, this.formfile).subscribe((res: any) => {
        this.showLoader = false;
        if(res['status']==true){
        this._snackBar.open("File successfully uploaded", "Ok", {horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition, duration: 2000 });
        this.successfileupload=true;
        this.filesent=true;
        }
        else{
          this.showLoader = false;
          this._snackBar.open("File cannot not be uploaded", "Ok", { horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,duration: 5000 });
        }
      },
        (error: { message: any; }) => {
          this.showLoader = false;
          this._snackBar.open("Sorry, we couldn't upload the file right now. Please try again later.", "Close", { horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,duration: 5000 });
        });
    }else{
      this._snackBar.open("Please select the file", "Ok", { horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,duration: 2000 });
    }
  }
  deleteFile(){
    this.file = null; 
    this.format = null;
    this.filename = null;
    this.formfile.delete('file');
    // this.fileSelect
  }
  showdeptname(name: any){
    this.departmentname=name;
  }
  logout(){
    this.router.navigate(['/adminlogin']);
  }
  students: any;
  search(){
    this.http.post<LoginResponse>('http://localhost:5000/api/get_details', { dept:this.departmentname }).subscribe(
      response =>{ 
        this.students = response;
        console.log(this.students);
      },
      error => {console.error('Error fetching students:', error)}
    );
  }
  printDiv() {
    window.print();
  }
  
}

