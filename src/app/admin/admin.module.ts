import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AdminHomeComponent } // Default route for this module
];

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
