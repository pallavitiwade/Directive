import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from 'src/app/model/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
@Input()getpost!:Ipost
  constructor() { }

  ngOnInit(): void {
  }

}
