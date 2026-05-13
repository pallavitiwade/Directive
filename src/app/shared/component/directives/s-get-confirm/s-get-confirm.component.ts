import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-s-get-confirm',
  templateUrl: './s-get-confirm.component.html',
  styleUrls: ['./s-get-confirm.component.scss']
})
export class SGetConfirmComponent implements OnInit {

  constructor(
        private _matDialogRef:MatDialogRef<SGetConfirmComponent>
    
  ) { }

  ngOnInit(): void {
  }
  onClose(flag:boolean){
  this._matDialogRef.close(flag)
}



}
