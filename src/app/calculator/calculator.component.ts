import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentInput:string="";
result:any="";
 
  appendInput(value:string){
    this.currentInput +=value
    console.log(this.currentInput)
   
  }
  calculate(){
    try{
      this.result=eval(this.currentInput)
      console.log(this.result)
    }catch(error){
      this.result='Error'
      console.log(this.result)
    }
  }
  clear(){
    this.currentInput="";
 this.result="";
  }
}
