import { Component, AfterContentChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterContentChecked, OnDestroy {

public currentRoute;
private sub;

  constructor(public router: Router, public route: ActivatedRoute) {}

  ngAfterContentChecked() {

    //  Because angular still doesn't support linking to a hash in the page...

    //  Does my new route have a hash?
    const match = this.router.url.match(/(^.*)\#/);

    //  if hash
    if (this.router.url !== this.currentRoute && match) {
      this.sub = this.route.fragment.subscribe(f => {
        const element = document.querySelector('#' + f);
        if (element) {
            element.scrollIntoView();
        }
      });

    // check to see if routes are identical
    } else if (this.router.url !== this.currentRoute) {
      //  routes are not the same, scroll to top of page
      document.getElementById('main').scrollTop = 0;

    }

    //  update current route for next go round
    this.currentRoute = this.router.url;
  }

  changeFocus(id) {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
        element.focus();
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
