import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public userInfo :any = {
    firstName:"",
    lastName:""
  }

  result :string = "";
  receiveData(data:string){
    this.result = data;
  }

}
