import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from 'src/app/model/mobile';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  @Input()mobileObj !:Imobile

  constructor() { }

  ngOnInit(): void {
  }

}
