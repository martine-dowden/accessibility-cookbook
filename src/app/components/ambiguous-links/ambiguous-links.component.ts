import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

declare var hljs: any;

@Component({
  selector: 'app-ambiguous-links',
  templateUrl: './ambiguous-links.component.html',
  styleUrls: ['./ambiguous-links.component.scss']
})
export class AmbiguousLinksComponent implements AfterViewInit {

  @ViewChild('code') codeElement: ElementRef;
  @ViewChild('code2') codeElement2: ElementRef;
  @ViewChild('code3') codeElement3: ElementRef;
  @ViewChild('code4') codeElement4: ElementRef;

  accessible: boolean;

  constructor(private router: Router) {}

  scrollTo(f) {
    if (this.router.url.match(/(^.*)\#/)) {
      const element = document.querySelector('#' + f);
      if (element) {
          element.scrollIntoView();
      }
    }
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeElement.nativeElement);
    hljs.highlightBlock(this.codeElement2.nativeElement);
    hljs.highlightBlock(this.codeElement3.nativeElement);
    hljs.highlightBlock(this.codeElement4.nativeElement);
  }

  makeAccessible() { this.accessible = !this.accessible; }

}
