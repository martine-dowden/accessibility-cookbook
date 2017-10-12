import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

declare var hljs: any;

@Component({
  selector: 'app-language-attribute',
  templateUrl: './language-attribute.component.html',
  styleUrls: ['./language-attribute.component.scss']
})
export class LanguageAttributeComponent implements OnInit, AfterViewInit {

  @ViewChild('code') codeElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeElement.nativeElement);
  }

}
