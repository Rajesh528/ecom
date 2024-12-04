import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: UserHomeComponent} // Default route for this module
];

@NgModule({
  declarations: [
    UserHomeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class UserModule { }
