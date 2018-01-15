import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {

  links = [
    {
      title: 'Accessibility Developer Tools by Google Accessibility',
      url: 'https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en'
    },
    {
      title: 'Lighthouse',
      url: 'https://developers.google.com/web/tools/lighthouse/'
    },
    {
      title: 'Wave Evaluation Tool',
      url: 'https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh'
    },
    {
      title: 'aXe',
      url: 'https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US'
    },
    {
      title: 'Funkify',
      url: 'http://www.funkify.org/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
