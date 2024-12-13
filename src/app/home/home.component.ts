import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userD:any[]=[];
  users:any[]=[];
data: any;

constructor(public dataSrvc:DataService ,public router:Router ) {}

ngOnInit(): void {
  console.log("calling home")
  this.dataSrvc.getUsers().subscribe((data:any)=>{
    console.log(data);
   this.userD=data.data
   console.log(this.userD)    
  });
  // this.dataSrvc.getUserDetails(1).subscribe((data:any)=>{
  //   console.log(data);
  // });
}
  active : boolean = false;
  userName:string="rajesh kumar";
 role:string = "admin";
 dataArry :any = []
info:any;


 getData(data:any){
console.log(data.id);
this.dataSrvc.getUserDetails(data.id).subscribe((response:any)=>{
  console.log(response);
  this.dataSrvc.setData(response)
  this.router.navigate(['details'])
 
});

 }

}
