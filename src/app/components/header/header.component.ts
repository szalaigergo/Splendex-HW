import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public numberList: number[] = [6, 8, 10, 12, 14, 16, 18, 20];
  selectedNumber = new FormControl(this.numberList[0]);
  @Output() startEvent = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.startEvent.emit(this.selectedNumber.value);
  }
}
