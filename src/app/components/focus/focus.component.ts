import { Component, AfterViewInit, AfterContentInit, trigger, transition, style, animate, ChangeDetectorRef, state, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from "@angular/material";

declare var hljs: any;
type Orientation = ( "prev" | "next" | "none" );

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss'],
  animations: [
    trigger( "imageAnimation", [
      state('*', style({ position: 'absolute' })),
      transition( 'void => prev', [
        style({ left: '-100%', opacity: 0  }),
        animate( "500ms ease-in-out",
          style({ left: 0, opacity: 1.0 })
        )
      ]),
      transition( 'prev => void', [
        style({ left: '0%', opacity: 1  }),
        animate( "500ms ease-in-out",
          style({ left: '100%', opacity: 0 })
        )
      ]),
      transition( 'void => next', [
        style({ left: '100%', opacity: 0  }),
        animate( "500ms ease-in-out",
          style({ left: 0, opacity: 1.0 })
        )
      ]),
      transition( 'next => void', [
        style({ left: '0%', opacity: 1  }),
        animate( "500ms ease-in-out",
          style({ left: '-100%', opacity: 0 })
        )
      ]),
    ])
  ],
})

export class FocusComponent implements AfterViewInit, AfterContentInit {

  orientation: Orientation = 'none';
  @ViewChild('imageContainer') imageContainer;
  @ViewChild('code') codeElement: ElementRef;
  @ViewChild('code2') codeElement2: ElementRef;

  buttons = [
    { id: 'lionfish', text: 'Lionfish' , class: 'first' },
    { id: 'seal', text: 'Seal', class: 'second' },
    { id: 'volture', text: 'Vulture', class: 'third' },
  ];
  selected = this.buttons[0];
  current = 0;
  accessible = false;
  container;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    hljs.highlightBlock(this.codeElement.nativeElement);
    hljs.highlightBlock(this.codeElement2.nativeElement);
  }

  ngAfterContentInit () {
    this.container = document.getElementById('imageContainer');
  }

  selectImage(img, i) {
    if ( i < this.current ) { this.orientation = 'prev'; }
    else if ( i > this.current ) { this.orientation = 'next'; }
    else { this.orientation = 'none'}
    this.current = i;
    this.changeDetectorRef.detectChanges();
    this.selected = img;  
  }
  toggleAccessibility(event) {
    this.accessible = !this.accessible;
  }

  onResize() { this.manageHeight() }

  manageHeight() {
    this.imageContainer.nativeElement.style.height = document.getElementById(this.selected.id).offsetHeight + 'px';
  }
  
  demoButtonClick() {
    this.snackBar.open('Demo button click','', { duration: 2000 });
  }

}
