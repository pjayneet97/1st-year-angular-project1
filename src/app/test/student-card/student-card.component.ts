import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {
  @Input("data") student;
  @Output("deleteStudent") deleteEvent=new EventEmitter();
  /* student={name:"jayen",age:"25",description:"hello"} */
  constructor() { }

  ngOnInit(): void {
  }
  deleteStudent(student){
    console.log("insite student card delete")
    this.deleteEvent.emit(student)
  }
  

}
