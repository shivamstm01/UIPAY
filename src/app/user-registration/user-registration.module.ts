import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegistrationRoutingModule } from './user-registration-routing.module';
import { LoginComponent } from './login/login.component';
import { LoadingPageModule } from '../loading-page/loading-page.module';
import { KycComponent } from './kyc/kyc.component';



@NgModule({
  declarations: [
    LoginComponent,
    KycComponent
  ],
  imports: [
    CommonModule,
    UserRegistrationRoutingModule,LoadingPageModule
  ]
})
export class UserRegistrationModule { }
