import { Component } from '@angular/core';

@Component({
  selector: 'app-color-contrast',
  templateUrl: './color-contrast.component.html',
  styleUrls: ['./color-contrast.component.scss']
})
export class ColorContrastComponent {

  contrast = false;

  toggleContrast() {
    this.contrast = !this.contrast;
  }



}
