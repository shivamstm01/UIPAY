import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { KycComponent } from './kyc/kyc.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'kyc',component:KycComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegistrationRoutingModule { }
