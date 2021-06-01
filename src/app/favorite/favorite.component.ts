import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isSelected: boolean;

  constructor() { 
    this.isSelected = true
  }
  
  onClick() {
    this.isSelected = !this.isSelected;
  }

  ngOnInit(): void {
  }

}
