import { Component, OnInit } from '@angular/core';
import { Imovies } from 'src/app/model/movie';
import { movieArray } from '../const/movies';

@Component({
  selector: 'app-movie-dashobard',
  templateUrl: './movie-dashobard.component.html',
  styleUrls: ['./movie-dashobard.component.scss']
})
export class MovieDashobardComponent implements OnInit {
moviesArr:Array<Imovies>=[]
  constructor() { }

  ngOnInit(): void {
    this.moviesArr=movieArray
  }

}
