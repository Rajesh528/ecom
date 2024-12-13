import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  userID: any;
constructor( public route:ActivatedRoute,public dataSrvc:DataService ){

  
}

ngOnInit(): void {
this.userID=this.dataSrvc.getData()
console.log(this.userID)
}



}


