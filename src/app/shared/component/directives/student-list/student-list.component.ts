import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Istd } from 'src/app/model/student';
import { SGetConfirmComponent } from '../s-get-confirm/s-get-confirm.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
@Input() getstdInfo!:Array<Istd>
@Output()emitRemovedId:EventEmitter<string>=new EventEmitter<string>()
@Output()emitEditTodo:EventEmitter<Istd>=new EventEmitter<Istd>()


  constructor(
       private _matdialog:MatDialog
    
  ) { }

  ngOnInit(): void {
  }

  onRemove(id:string){
    let Config=new MatDialogConfig()
           Config.width='250px',
           Config.disableClose=true
    
           let MatDialogRef=this._matdialog.open(SGetConfirmComponent, Config)
           MatDialogRef.afterClosed().subscribe(getConfirm=>{
            if(getConfirm===true){
               this.emitRemovedId.emit(id)
    
            }
           })
          }
  onEdit(editstd:Istd) {
          this.emitEditTodo.emit(editstd)
  }
      
    }

  

