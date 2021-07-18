import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public numberList: number[] = [6, 8, 10, 12, 14, 16, 18, 20];
  selectedNumber = new FormControl(this.numberList[0]);

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    console.log(this.selectedNumber.value as number);
  }
}
