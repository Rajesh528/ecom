import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() firstName!: string;
  @Input() lastName!: number;
  @Output() dataEvent = new EventEmitter<string>();

  constructor(){}
  ngOnInit(): void {
    console.log(this.firstName);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes detected:', changes);

    // Example 1: Check if "firstName" has changed
    if (changes['firstName'] && !changes['firstName'].isFirstChange()) {
      const prevfirstName = changes['firstName'].previousValue;
      const currentfirstName = changes['firstName'].currentValue;
      console.log(`firstName changed from "${prevfirstName}" to "${currentfirstName}"`);
    }

    // Example 2: Detect if "lastName" became greater than 18
    if (changes['lastName'] && changes['lastName'].currentValue > 18) {
      console.log('lastName is now greater than 18');
    }


  }

  submit(){
this.dataEvent.emit(this.firstName+this.lastName);
  }

}
