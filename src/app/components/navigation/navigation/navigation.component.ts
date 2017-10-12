import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  sections = {
    header: '<p>The HTML <code>&lt;header&gt;</code> element represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, a search form, an author name, and so on.</p>',
    nav: '<p>The HTML <code>&lt;nav&gt;</code> element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.</p>',
    section: '<p>The HTML <code>&lt;section&gt;</code> element represents a standalone section of functionality contained within an HTML document, typically with a heading, which does not have a more specific semantic element to represent it.</p>',
    article: '<p>The HTML <code>&lt;article&gt;</code> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry.</p>',
    aside: '<p>The HTML <code>&lt;aside&gt;</code> element represents a section of a document with content connected tangentially to the main content of the document (often presented as a sidebar).</p>',
    footer: '<p> The HTML <code>&lt;footer&gt;</code> element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.</p>'
  };

  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  expand(section) {
    let dialogRef = this.dialog.open(SectionInfoDialog, {
      
      data: {
        title: section,
        content: this.sections[section]
      }
    });
  }
}

@Component({
  selector: 'section-info-diablog',
  templateUrl: './section-info-dialog.html',
  styleUrls: ['./section-info-dialog.scss']
})

export class SectionInfoDialog {
  
    constructor(
      public dialogRef: MatDialogRef<SectionInfoDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }