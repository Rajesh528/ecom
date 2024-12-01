import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:"home",component:HomeComponent, canActivate :[AuthGuard]},
  {path:"login",component:LoginComponent},
  {path:"admin", loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"parent",component:ParentComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
