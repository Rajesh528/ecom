import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-p-child',
  templateUrl: './p-child.component.html',
  styleUrls: ['./p-child.component.css']
})
export class PChildComponent implements OnInit,OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
  console.log("changes in",changes)
  }


  ngOnInit(): void {
    // console.log(this.ngOnChanges)
     
  }
  @Input() parentMessage: string = ''; // Input for message
  @Input() user: { name: string; age: number } = { name: '', age: 0 };
  @Input() firstName!: string;
  @Input() lastName!: number;

  @Output() messageEvent = new EventEmitter<string>();


  sendMessageToParent() {
    this.messageEvent.emit('Hello from Child!'); // Emit the message
  }
  submit(){
console.log(this.firstName)  
console.log(this.user)
  }


}
