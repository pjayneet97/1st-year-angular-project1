import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  //studentTobeAdded=""
  //students:string[]=[]
  studentTobeAdded:{name:string,age:string,description:string}={name:"",age:"",description:""}
  students:{name:string,age:string,description:string}[]=[]
  numbers:number[]
  constructor(){
    console.log(this.students)
  }
  ngOnInit(): void {
  }
  addStudent(){    
    //this.studentTobeAdded=""
    let temp1=this.isNameValid();
    let temp2=this.isageValid();
    if( temp1 && temp2 ){
      let tempStudent={name:"",age:"",description:""};
      tempStudent.name=this.studentTobeAdded.name;
      tempStudent.age=this.studentTobeAdded.age;
      tempStudent.description=this.studentTobeAdded.description
      this.students.push(tempStudent)
      this.studentTobeAdded.name="";
      this.studentTobeAdded.age="";
      this.studentTobeAdded.description=""
      console.log(this.students)
    }
  }
/*   isInputsvalid(){
    if(this.studentTobeAdded.name!="" && this.studentTobeAdded.age!=""){
      return true
    }
    else{
      return false
    }
  } */
  isNameValid(){
    if(this.studentTobeAdded.name!=""){
      return true;
    }
    else{
      alert("enter valid name")
      return false
    }
  }
  isageValid(){
    if(this.studentTobeAdded.age!=""){
      return true;
    }
    else{
      alert("enter valid age")
      return false
    }
  }

/*   deleteStudent(studenttobedeleted){
    let index=this.students.indexOf(studenttobedeleted)
    this.students.splice(index,1)
  } */

  deleteStudent(student){
    console.log(student);
    let index=this.students.indexOf(student);
    this.students.splice(index,1)
  }

}
