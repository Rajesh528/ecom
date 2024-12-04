import { Component } from '@angular/core';

@Component({
  selector: 'app-p-parent',
  templateUrl: './p-parent.component.html',
  styleUrls: ['./p-parent.component.css']
})
export class PParentComponent {
  public userInfo :any = {
    firstName:"",
    lastName:""
  }

  message = 'Hello from Parent!';
  userDetails = { name: 'John Doe', age: 30 };

  receivedMessage: string = ''; // Variable to store the message from the child

  handlemessage(message:string){
    this.receivedMessage=message;

  }

}
