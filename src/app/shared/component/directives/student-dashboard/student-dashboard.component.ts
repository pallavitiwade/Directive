import { Component, OnInit } from '@angular/core';
  import { Istd } from "src/app/model/student";
import { snackBarService } from '../service/snackbar.service';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  
  
   stdsArr:Array<Istd> = [
      {
        Fullname: "Amit Sharma",
        Email: "amit.sharma@gmail.com",
        contact: "9876543210",
        IsActive: true,
        id: '2'
      },
      {
        Fullname: "Priya Verma",
        Email: "priya.verma@gmail.com",
        contact: "9123456780",
        IsActive: true,
        id: '3'
      },
      {
        Fullname: "Rahul Patil",
        Email: "rahul.patil@gmail.com",
        contact: "9988776655",
        IsActive: false,
        id: '4'
      },
      {
        Fullname: "Sneha Kulkarni",
        Email: "sneha.kulkarni@gmail.com",
        contact: "9090909090",
        IsActive: true,
        id: '5'
      },
      {
        Fullname: "Vikas Singh",
        Email: "vikas.singh@gmail.com",
        contact: "9871234567",
        IsActive: false,
        id: '6'
      }
    ];
    
  editTodoObj!:Istd
  constructor(
        private _snackBar:snackBarService
    
  ) { }

  ngOnInit(): void {
  }

getNewstd(std:Istd){
  this.stdsArr.push(std)
    this._snackBar.openSnackBar(`The ${std.Fullname} is Added Successfully !!!`)

}
getRemovedId(id:string){
  let getIndex=this.stdsArr.findIndex(t=>t.id===id)
  let remove=this.stdsArr.splice(getIndex,1)
      this._snackBar.openSnackBar(`The ${remove[0].Fullname} is Removed Successfully !!!`)

  
}
getEditTodo(editstd:Istd){
  this.editTodoObj=editstd

}
emitUpdateTodo(Update:Istd){
  let GET_Index=this.stdsArr.findIndex(t=>t.id===Update.id)
  this.stdsArr[GET_Index]=Update
    this._snackBar.openSnackBar(`The Todo Item ${Update.Fullname} is updated Successfully !!!`)

}

}