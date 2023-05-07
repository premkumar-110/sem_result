import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent {
  constructor(private router: Router,private _snackBar: MatSnackBar,private location: Location) {}
  goback()
  {
    this.location.back();
  }
  onRightClick(event: MouseEvent): void {
    event.preventDefault();
  }
}
