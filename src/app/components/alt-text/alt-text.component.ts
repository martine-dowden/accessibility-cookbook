import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { trigger, style, animate, transition, keyframes, state } from '@angular/animations';

@Component({
  selector: 'app-alt-text',
  templateUrl: './alt-text.component.html',
  styleUrls: ['./alt-text.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])  
  ]
})
export class AltTextComponent implements OnInit  {

accessible = false;
flip = "inactive";

@ViewChild('stairs') stairs;
@ViewChild('wrapper') wrapper;
@ViewChild('captionA') captionA;
@ViewChild('captionN') captionN;

ngOnInit() {}
ngAfterViewChecked() {
  this.resize();
}

  makeAccessible() {
    this.accessible = !this.accessible;
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  resize () {
    this.wrapper.nativeElement.style.height = this.stairs.nativeElement.offsetHeight/16 + 5.375 + 'rem';
    this.captionA.nativeElement.style.width = this.stairs.nativeElement.offsetWidth + 'px';
    this.captionN.nativeElement.style.width = this.stairs.nativeElement.offsetWidth + 'px';
  }

  onResize(e) {
    this.resize();
  }

}
