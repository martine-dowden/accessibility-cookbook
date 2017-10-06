import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes, state } from '@angular/animations';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition(':enter', [
        animate('100ms', keyframes([
          style({
            opacity: 0,
            transform: 'scaleY(0)',
            'transform-origin' : '50% 0%',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'scale(1)',
            offset: 1.0
          })
        ]))
      ]),
      transition(':leave', [
        animate('200ms', keyframes([
          style({
            opacity: 1,
            transform: 'scaleY(1)',
            'transform-origin' : '50% 0%',
            offset: 0
          }),
          style({
            opacity: 0,
            transform: 'scaleY(0)',
            offset: 1.0
          })
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  expanded = false;
  category;

  ngOnInit() {
    console.log(window.innerWidth);
    this.manageNav(window.innerWidth);
  }

  onResize(event) {
    this.manageNav(event.target.innerWidth); 
  }

  toggleNav() { this.expanded = !this.expanded; }
  manageNav(w) { 
    if (w >= 750) { this.expanded = true; } 
    else { this.expanded = false; }
  }


}
