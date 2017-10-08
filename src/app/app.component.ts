import { Component, AfterContentChecked, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked {

currentRoute;

  constructor(public route: Router) {
    this.currentRoute = route.url;
  }

  ngAfterContentChecked() {
    if (this.route.url !== this.currentRoute) {
      document.getElementById('container').scrollTop = 0;
      this.currentRoute = this.route.url;
    }
    
  }
  
}
