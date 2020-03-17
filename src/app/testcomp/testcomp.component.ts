import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  number1:number;
  number2:number;
  result:number=0;
  operation;
  constructor() { 
    this.printHello();
  }

  ngOnInit() {
    console.log("hello form ngoninit")
  }

  printHello(){
    console.log("function print hello called")
  }
  addNumbers(){
   if(this.isInputValid()){
    this.result=this.number1+this.number2;
    this.operation="addition"
    this.resetNumbers()
   }
   else{
     alert("please enter a valid number")
   }
  }
  subtractNumbers(){
    if(this.isInputValid()){
      this.result=this.number1-this.number2;
      this.operation="Subtraction"
      this.resetNumbers()
     }
     else{
       alert("please enter a valid number")
     }
    
  }
  multiplyNumbers(){
    if(this.isInputValid()){
      this.result=this.number1*this.number2;
      this.operation="multiplicatin"
      this.resetNumbers()
     }
     else{
       alert("please enter a valid number")
     }
  }
  divideNumbers(){
    if(this.isInputValid()){
      this.result=this.number1/this.number2;
      this.operation="division"
      this.resetNumbers()
     }
     else{
       alert("please enter a valid number")
     }
  }
  isInputValid(){
    if(this.number1 && this.number2){
      console.log("valid numbers")
      return true
    }
    else{
      console.log("invalid input")
      return false
    }
  }
  resetNumbers(){
    this.number1=undefined;
    this.number2=null;
  }


}
