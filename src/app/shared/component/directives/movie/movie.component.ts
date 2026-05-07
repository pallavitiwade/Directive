import { Component, Input, OnInit } from '@angular/core';
import { Imobile } from 'src/app/model/mobile';
import { Imovies } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
 @Input()  public movieObj!:Imovies
  constructor() { }

  ngOnInit(): void {
  }

}
