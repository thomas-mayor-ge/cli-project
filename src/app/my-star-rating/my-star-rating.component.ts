import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-star-rating',
  templateUrl: './my-star-rating.component.html',
  styleUrls: ['./my-star-rating.component.css'],
  inputs : ['rating'],
  outputs : ['ratingChange'],
})
export class MyStarRatingComponent implements OnInit {
  public rating: number;
  public hover: number;
  public ratingChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.hover = -1;
  }

  ngOnInit() {
  }

  onMouseOver(index: number) {
    this.hover = index;
  }

  onMouseOut() {
    this.hover = -1;
  }

  onStarClick(index: number) {
    this.ratingChange.emit(index + 1);
  }

  isFullStar(index: number): boolean {
    return this.isStarHover(index) || this.rating >= index + 1;
  }

  isHalfStar(index: number): boolean {
    return this.rating > index && this.rating < index + 1 && !this.isStarHover(index);
  }

  isEmptyStar(index: number): boolean {
    return this.rating <= index && !this.isStarHover(index);
  }

  isStarHover(index: number): boolean {
    return this.hover >= index;
  }

}
