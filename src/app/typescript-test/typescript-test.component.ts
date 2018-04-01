/*
  Default Parameters in ES6
  Template Literals in ES6
  Multi-line Strings in ES6
  Destructuring Assignment in ES6
  Enhanced Object Literals in ES6
  Arrow Functions in ES6
  Promises in ES6
  Block-Scoped Constructs Let and Const
  Classes in ES6
  Modules in ES6
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-test',
  templateUrl: './typescript-test.component.html',
  styleUrls: ['./typescript-test.component.css']
})
export class TypescriptTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    aLambdaFunction();
    //template string
    displayItOnWhiteBoard(`optional parameter example with one argument passed ${optionalParameterFunction(10)}`);
    //template string
    console.log(optionalParameterFunction(10,20));
    displayItOnWhiteBoard(name.getFullName());
    displayItOnWhiteBoard(add(undefined,10,20));
    displayItOnWhiteBoard(add(25,10,20));
    displayItOnWhiteBoard(buildName('Jony','jonny','samuel','lukaku'));
  }
  
  public buildName( firstName : string , lastName : string ) : string{
    return `${firstName} ${lastName}`
  }  

  public add : (number1 : number,number2) => number = function(x:number,y:number):number{
    return x+y;
  }
}

/* Object Literal Enhancements */

let firstName = "jay",
    lastName = "thakkar";

let name = {
  firstName,
  lastName,
  getFullName():string{
    return `${firstName} ${lastName}`
  }
}

/* End of Object Lieral Enhancements */

/* Rest parameter  */

let buildName = (firstName : string , ...restParam : string[]):string =>{
  return `${firstName} ${restParam.join(' ')}`;
}

/* End Of Rest parameter */

/* default function parameter */

let add = function(aNumber : number = 10 , bNumber : number , cNumber: number): number{
  return aNumber + bNumber + cNumber;
}

/* end of default function parameter */

// lambda functions

let aLambdaFunction = ():void=>{
  displayItOnWhiteBoard('a lambda function with 0 parameters');
};

//Example of the function with optional parameter

let optionalParameterFunction = function(number1:number,number2?:number){
  return number1 + (number2? number2:0);
}

let displayItOnWhiteBoard = (message : any):void=>{
  let whiteBoard = document.getElementById('whiteBoard'),
      notice = document.createElement('p');
  
  notice.innerHTML = message;
  whiteBoard.appendChild(notice);
};