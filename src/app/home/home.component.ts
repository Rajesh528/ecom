import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

constructor(public dataSrvc:DataService ) {}

ngOnInit(): void {
  console.log("calling home")
  this.dataSrvc.getUsers().subscribe((data:any)=>{
    console.log(data);
  });
  this.dataSrvc.getUserDetails(1).subscribe((data:any)=>{
    console.log(data);
  });
}
  active : boolean = false;
  userName:string="rajesh kumar";
 role:string = "admin";
 dataArry :any = []
}
