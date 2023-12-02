import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helper/auth.gaurd';
import { LoginComponent } from './login/login.component';
import { InvestorGridComponent } from './investor-main/investor-grid/investor-grid.component';
import { InvestorDetailComponent } from './investor-main/investor-detail/investor-detail.component';
import { InvestorMainComponent } from './investor-main/investor-main.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {path:'connect',component:LoginComponent},
  {path:'investors',component:InvestorMainComponent,canActivate: [AuthGuard] },
   {path:'investors/investor',component:InvestorDetailComponent,canActivate: [AuthGuard] }


  // otherwise redirect to home

//   children: [
//     {
//       path: 'login',
//       component: LoginComponent,
//   },
//   {
//       path: 'investor-grid',
//       component: InvestorGridComponent,
//   },
// ]
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
