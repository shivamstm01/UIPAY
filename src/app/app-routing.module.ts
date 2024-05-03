import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {path:'',redirectTo:'loading-page/home',pathMatch:'full'},
  {path:'loading-page',loadChildren:()=>import('../app/loading-page/loading-page.module').then(m=>m.LoadingPageModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
