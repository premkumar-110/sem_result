
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor( private router: Router ,private _snackBar: MatSnackBar ,private http: HttpClient,private ResultinfoService:ResultinfoService) {}
  s1=this.ResultinfoService.s1;
  s2=this.ResultinfoService.s2;
  s3=this.ResultinfoService.s3;
  s4=this.ResultinfoService.s4;
  s5=this.ResultinfoService.s5;
  s6=this.ResultinfoService.s6;
  s7=this.ResultinfoService.s7;
  s8=this.ResultinfoService.s8
  s9=this.ResultinfoService.s9;
  count=this.ResultinfoService.count;
  name=this.ResultinfoService.name;
  regno=this.ResultinfoService.regno;
  photocopyapplied:boolean=this.ResultinfoService.photocopyapplied;
  revaluationapplied:boolean=this.ResultinfoService.revaluationapplied;
  applyrevaluation(){
    this.router.navigate(['/revaluation']);
  }
  applyphotocopy(){
    this.router.navigate(['/applyphotocopy']);
  }
}
