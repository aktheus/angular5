import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  itemCountAux: number;
  btnText: string;
  goalText: string;
  goals: string[] = [];
  constructor() {
    this.itemCount = 0;
  }

  ngOnInit() {
    this.itemCount = 0;
    if (typeof this.goals !== 'undefined' && this.goals.length > 0) {
      this.itemCount = this.goals.length;
    }
    this.btnText = 'Add an Item';
    this.goalText = 'My first life goal';
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }
}
