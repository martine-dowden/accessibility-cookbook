import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, trigger, state, transition, style, animate, AfterContentInit } from '@angular/core';

declare var hljs: any;

@Component({
  selector: 'app-html-header-tags',
  templateUrl: './html-header-tags.component.html',
  styleUrls: ['./html-header-tags.component.scss']
})

export class HtmlHeaderTagsComponent implements OnInit, AfterViewInit, AfterContentInit {

  hierarchy = false;
  @ViewChild('code') codeElement: ElementRef;
  @ViewChild('withHierarchy') withHierarchy;
  @ViewChild('withoutHierarchy') withoutHierarchy;
  @ViewChild('container') container;
  animation;
  animation2;

  withHierarchyHeight
  withoutHierarchyHeight;
  containerHeight;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeElement.nativeElement);
  }

  ngAfterContentInit() {
    this.manageContainerHeight();
  }

  onResize() {
    this.manageContainerHeight();
  }

  toggleHierarchy() { 
    this.hierarchy = !this.hierarchy;
  }

  manageContainerHeight() {
    this.withHierarchyHeight = this.withHierarchy.nativeElement.offsetHeight;
    console.log(this.withHierarchyHeight);
    this.withoutHierarchyHeight = this.withoutHierarchy.nativeElement.offsetHeight;
    console.log(this.withoutHierarchyHeight);
    this.container.nativeElement.style.height = this.withHierarchyHeight > this.withoutHierarchyHeight ? this.withHierarchyHeight + 16 + 'px' : this.withoutHierarchyHeight + 16 +  'px';
    console.log(this.container.nativeElement.style.height)
  }

}
