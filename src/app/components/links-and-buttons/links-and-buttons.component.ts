import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links-and-buttons',
  templateUrl: './links-and-buttons.component.html',
  styleUrls: ['./links-and-buttons.component.scss']
})
export class LinksAndButtonsComponent implements OnInit {

  link;
  button;
  neither;
  buttonQuestion;
  clickMe = false;

  constructor() { }

  ngOnInit() {
  }

  isNavigate(val) {
    if (val === true) {
      this.link = true;
      this.buttonQuestion = false;
      this.button = undefined;
      this.neither = undefined;
    } else {
      this.link = false;
      this.buttonQuestion = true;
      this.button = undefined;
      this.neither = undefined;
    }
  }

  isButton(val) {
    if (val === true) {
      this.button = true;
      this.neither = false;
    } else {
      this.button = false;
      this.neither = true;
    }
  }

  reset() {
    this.link = undefined;
    this.buttonQuestion = undefined;
    this.button = undefined;
    this.neither = undefined;
  }

  toggleClickMe() {
    this.clickMe = !this.clickMe;
  }

}
