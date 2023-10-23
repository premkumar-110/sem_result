import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { PaymentComponent } from './payment/payment.component';
import { PhotocopyPaymentComponent } from './photocopy-payment/photocopy-payment.component';
import { PhotocopyComponent } from './photocopy/photocopy.component';
import { RevaluationComponent } from './revaluation/revaluation.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path:'',component:StudentComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'revaluation',component:RevaluationComponent
  },
  {
    path:'payment',component:PaymentComponent
  },
  {
    path:'applyphotocopy',component:PhotocopyComponent
  },
  {
    path:'photocopypayment',component:PhotocopyPaymentComponent
  },
  {
    path:'adminlogin',component:AdminloginComponent
  }
  ,
  {
    path:'admindashboard',component:AdmindashboardComponent
  }
  
  ,
  {
    path:'**',component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
