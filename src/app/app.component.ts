import { Component, AfterContentChecked, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  AfterContentChecked, OnInit, OnDestroy {

  public currentRoute;
  private sub;
  private currentIndex = 0;

  private pages = [
    { path: 'home', title: 'Home'},
    { path: 'color_contrast', title: 'Color Contrast'},
    { path: 'alt_text', title: 'Alt Text'},
    { path: 'form_labels', title: 'Form Labels'},
    { path: 'focus', title: 'Focus'},
    { path: 'html_header_tags', title: 'HTML Header Tags'},
    { path: 'links_and_buttons', title: 'Links and Buttons'},
    { path: 'ambiguous_links', title: 'Ambiguous Links'},
    { path: 'language_attribute', title: 'Language Attribute'},
    { path: 'navigation', title: 'Navigation'},
    { path: 'animations', title: 'Animations'},
    { path: 'tables', title: 'Tables'},
    { path: 'tools', title: 'Tools'},
  ];

  private next = this.pages[this.currentIndex + 1] ? this.pages[this.currentIndex + 1].path : null;
  private previous = this.pages[this.currentIndex - 1] ? this.pages[this.currentIndex - 1].path : null;

  constructor(
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const href = this.router.url;
        this.currentIndex = this.pages.indexOf(this.pages.find((routes) => `/${routes.path}` === href ));
        const element = document.querySelector('#main');
        element.scrollIntoView();
      }
    });
  }

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
