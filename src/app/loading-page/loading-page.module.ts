import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingPageRoutingModule } from './loading-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LoadingPageRoutingModule
  ],
  exports:[
    HomeComponent,
    HeaderComponent
  ]
})
export class LoadingPageModule { }
