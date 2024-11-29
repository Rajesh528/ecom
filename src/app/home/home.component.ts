import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  active : boolean = false;
  userName:string="rajesh kumar";
 role:string = "admin";
 dataArry :any = []
}
