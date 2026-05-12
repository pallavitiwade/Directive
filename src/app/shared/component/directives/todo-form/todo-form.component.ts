import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Itodos } from 'src/app/model/todo';
import { todoServices } from '../service/todo.services';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
@ViewChild('todoItem') todoItem!:ElementRef
@ViewChild('isComplted') isComplted!:ElementRef

@Input()getEditObj!:Itodos
@Output() emitNewTodo:EventEmitter<Itodos>=new EventEmitter<Itodos>()
@Output() emitUpdateTodo:EventEmitter<Itodos>=new EventEmitter<Itodos>()

isInEditMode:boolean=false;
  constructor(
    private _todoServices:todoServices

  ) {}

  ngOnChanges(changes:SimpleChanges): void{
    console.log(changes);
    if(!!changes['getEditObj'].currentValue){
      this.isInEditMode=true
      this.todoItem.nativeElement.value=this.getEditObj.todoItem
      this.isComplted.nativeElement.value=this.getEditObj.isComplted

    }
  }
  ngOnInit(): void {
    console.log(this.getEditObj)
  }

onTodoAdd(){
  let todo:Itodos={
    todoItem:this.todoItem.nativeElement.value,
    isComplted:this.isComplted.nativeElement.value === 'true'?true:false,
    todoId:this._todoServices.uuid()
  }
console.log(todo)
this.todoItem.nativeElement.value=''
this.isComplted.nativeElement.value=true

this.emitNewTodo.emit(todo)
}


onTodoUpdate(){
let UPDATE_OBJ:Itodos={
  todoItem:this.todoItem.nativeElement.value,
  isComplted:this.isComplted.nativeElement.value,
  todoId:this.getEditObj.todoId

}
this.emitUpdateTodo.emit(UPDATE_OBJ)
this.todoItem.nativeElement.value=''
this.isComplted.nativeElement.value=true
this.isInEditMode=false
}
}
