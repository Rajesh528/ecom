import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ParentComponent } from './parent/parent.component';
import { AuthDeactiveGuard } from './auth-deactive.guard';
import { PParentComponent } from './p-parent/p-parent.component';
import { PChildComponent } from './p-child/p-child.component';


const routes: Routes = [
  {path:"home",component:HomeComponent, canDeactivate:[AuthDeactiveGuard]},
  {path:"login",component:LoginComponent, canDeactivate:[AuthDeactiveGuard]},
  {path:"admin", loadChildren: ()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:"parent",component:ParentComponent},
  {path:"userHome", loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),canLoad:[AuthGuard]},
  {path:"p_Parent",component:PParentComponent},
  {path:"p_Child",component:PChildComponent},
  {path:"", redirectTo:"home",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
