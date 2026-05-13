import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Istd } from 'src/app/model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
IsinEditMode:boolean=false
@Output()emiNewstd:EventEmitter<Istd>=new EventEmitter<Istd>()
@Output() emitUpdateTodo:EventEmitter<Istd>=new EventEmitter<Istd>()


@ViewChild('Fullname')Fullname!:ElementRef
@ViewChild('Email')Email!:ElementRef
@ViewChild('contact')contact!:ElementRef
@ViewChild('IsActive')IsActive!:ElementRef

@Input()getEditObj!:Istd


  constructor() {}

  ngOnChanges(changes:SimpleChanges): void{
    console.log(changes);
    if(!!changes['getEditObj'].currentValue){
      this.IsinEditMode=true
      this.Fullname.nativeElement.value=this.getEditObj.Fullname
      this.Email.nativeElement.value=this.getEditObj.Email
          this.contact.nativeElement.value=this.getEditObj.contact
          this.IsActive.nativeElement.value=this.getEditObj.IsActive
    }
    }
  
  ngOnInit(): void {
  }

  onStdAdd(){
    let stdObj:Istd={
      Fullname:this.Fullname.nativeElement.value,
      Email:this.Email.nativeElement.value,
      contact:this.contact.nativeElement.value,
      IsActive:this.IsActive.nativeElement.value==='true'?true:false,
      id:Date.now().toString()
    }
     this.Fullname.nativeElement.value=''
     this.Email.nativeElement.value=''
      this.contact.nativeElement.value=''

    this.emiNewstd.emit(stdObj)
  }

  onUpdate(){
  let UPDATE_OBJ:Istd={
    Fullname:this.Fullname.nativeElement.value,
    Email:this.Email.nativeElement.value,
    contact:this.contact.nativeElement.value,
    IsActive:this.IsActive.nativeElement.value,
    id:this.getEditObj.id

  
  }
  this.emitUpdateTodo.emit(UPDATE_OBJ)
  this.Fullname.nativeElement.value=''
  this.Email.nativeElement.value=''
  this.contact.nativeElement.value=''
  this.IsActive.nativeElement.value=''
  this.IsinEditMode=false
  }


}


