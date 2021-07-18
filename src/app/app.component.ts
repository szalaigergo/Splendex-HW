import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Splendex-HW';
  deckNumber: number | undefined;

  startHandle($event: number) {
    this.deckNumber = $event;
  }
}
