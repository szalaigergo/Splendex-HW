import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../../model/card";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  deckNumber: number = 8;
  matchCounter = 0;
  shownCardCounter: number = 0;
  cardTypes = new Map([
    ["Angular", "/assets/images/cards/angular.png"],
    ["D3", "/assets/images/cards/d3.png"],
    ["Jenkins", "/assets/images/cards/jenkins.png"],
    ["Postcss", "/assets/images/cards/postcss.png"],
    ["React", "/assets/images/cards/react.png"],
    ["Redux", "/assets/images/cards/redux.png"],
    ["Sass", "/assets/images/cards/sass.png"],
    ["Splendex", "/assets/images/cards/splendex.png"],
    ["Ts", "/assets/images/cards/ts.png"],
    ["Webpack", "/assets/images/cards/webpack.png"]])
  cards: Card[] = [];
  shownCards: Card[] = [];

  //option menu

  public numberList: number[] = [6, 8, 10, 12, 14, 16, 18, 20];
  selectedNumber = new FormControl(this.numberList[0]);

  constructor() { }

  ngOnInit(): void {
    let _id = 0;
    for (let iterator of this.cardTypes) {
      if (_id >= this.deckNumber) break;
      this.cards.push({id: _id, url: iterator[1], show: false, matched: false}, {id: _id+1, url: iterator[1], show: false, matched: false});
      _id+=2;
    }
    this.cards.sort(() => Math.random() - 0.5);
  }

  handleCardClick(card: Card) {
    card.show = true;
    this.shownCards.push(card);
    console.log(this.shownCards)
    //check if it matched
    if (this.shownCards.length == 2) {
      if ((this.shownCards[0].url == this.shownCards[1].url) && (this.shownCards[0].id != this.shownCards[1].id)) {
        for (let card of this.cards) {
          if (card.id == this.shownCards[0].id || card.id == this.shownCards[1].id) {
            card.matched = true;
            this.matchCounter++;
          }
        }
        if (this.matchCounter == this.deckNumber) {
          alert('Nice job!');
        }
      } else {
        setTimeout(() => {
          for (let card of this.cards) {
            // but dont hide what we matched (or hide what we haven't match)
            if (!card.matched) {
              card.show = false;
            }
          }
          this.shownCardCounter = 0;
        }, 200);
      }
      this.shownCards = [];
    }
  }
}
