import { Component, OnInit, ViewChild, trigger, state, transition, style, animate, ChangeDetectorRef } from '@angular/core';

type Orientation = ( 'prev' | 'next' | 'none' );

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [
    trigger( 'imageAnimation', [
      state('*', style({ position: 'absolute' })),
      transition( 'void => prev', [
        style({ left: '-100%', opacity: 0  }),
        animate( '500ms ease-in-out',
          style({ left: 0, opacity: 1.0 })
        )
      ]),
      transition( 'prev => void', [
        style({ left: '0%', opacity: 1  }),
        animate( '500ms ease-in-out',
          style({ left: '100%', opacity: 0 })
        )
      ]),
      transition( 'void => next', [
        style({ left: '100%', opacity: 0  }),
        animate( '500ms ease-in-out',
          style({ left: 0, opacity: 1.0 })
        )
      ]),
      transition( 'next => void', [
        style({ left: '0%', opacity: 1  }),
        animate( '500ms ease-in-out',
          style({ left: '-100%', opacity: 0 })
        )
      ]),
    ])
  ],
})
export class AnimationsComponent implements OnInit {

  images = [
    {
      fileName: 'potw1737a.jpg',
      alt: 'Hubble Catches Starbursts in a Barred Spiral Galaxy'
    },
    {
      fileName: 'potw1741a.jpg',
      alt: 'Hubble’s Compact Galaxy with Big-Time Star Formation'
    },
    {
      fileName: 'potw1732a.jpg',
      lt: 'Hubble Displays a Dwarf Spiral Galaxy'
    },
    {
      fileName: 'hubble-eyes-galactic-refurbishment_17322896925_o-orig.jpg',
      alt: 'Hubble Eyes Galactic Refurbishment'
    },
  ];
  orientation: Orientation = 'none';
  interval = 2000;
  currentslide = 1;
  numslides = this.images.length;
  @ViewChild('image') image;
  auto;
  isAuto;
  accessible;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.makeAuto();
  }

  makeAccessible() {
    this.accessible = !this.accessible;
    if (!this.accessible) {
      this.makeAuto();
    } else {
      this.stopAuto();
    }
  }

  makeAuto() {
    this.orientation = 'next';
    this.isAuto = true;
    this.auto = setInterval( () => { this.cycleImages(); }, this.interval);
  }

  stopAuto() {
    this.isAuto = false;
    clearInterval(this.auto);
  }

  next() {
    this.cycleImages();
  }

  previous() {
    this.orientation = 'prev';
    this.changeDetectorRef.detectChanges();
    if ( this.currentslide !== 1 ) {
      this.currentslide = this.currentslide - 1;
    } else {
      this.currentslide = this.numslides;
    }
  }

  jumpTo(image) {
    if (this.currentslide > image ) {
      this.orientation = 'prev';
      this.changeDetectorRef.detectChanges();
    } else {
      this.orientation = 'next';
      this.changeDetectorRef.detectChanges();
    }
    this.currentslide = image;
  }

  cycleImages() {
    this.orientation = 'next';
    this.changeDetectorRef.detectChanges();
    if (this.currentslide < this.numslides ) {
      this.currentslide = this.currentslide + 1;
    } else {
      this.currentslide = 1;
    }
  }

  getHeight(elem) {
    document.getElementById('carouselle').style.height = elem.offsetHeight + 'px';
  }


}
