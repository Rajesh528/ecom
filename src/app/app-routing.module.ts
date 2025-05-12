import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthDeactiveGuard } from './auth-deactive.guard';
import { ProductsPageComponent } from './pages/products-page.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:"home",component:ProductsPageComponent},
  {path:"login",component:LoginComponent},
  {path:"admin", loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"userHome", loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  { path: 'signup', component: SignupComponent },
  {path:"", redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
