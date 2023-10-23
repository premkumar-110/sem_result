import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { StudentComponent } from './student/student.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RevaluationComponent } from './revaluation/revaluation.component';
import { PaymentComponent } from './payment/payment.component';
import { PhotocopyComponent } from './photocopy/photocopy.component';
import { PhotocopyPaymentComponent } from './photocopy-payment/photocopy-payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ErrorpageComponent,
    DashboardComponent,
    RevaluationComponent,
    PaymentComponent,
    PhotocopyComponent,
    PhotocopyPaymentComponent, 
    AdminloginComponent,
    AdmindashboardComponent,
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    HttpClientModule,
    MatMenuModule,
    NgOptimizedImage,
    MatTooltipModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
