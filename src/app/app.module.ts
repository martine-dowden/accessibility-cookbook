import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRouting } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MatTooltipModule, MatButtonModule, MatInputModule, MatSnackBarModule, MatDialogModule, } from '@angular/material';
import 'hammerjs';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { TopbarComponent } from './components/topbar/topbar.component';
import { ColorContrastComponent } from './components/color-contrast/color-contrast.component';
import { AltTextComponent } from './components/alt-text/alt-text.component';
import { FormLabelsComponent } from './components/form-labels/form-labels.component';
import { FocusComponent } from './components/focus/focus.component';
import { HtmlHeaderTagsComponent } from './components/html-header-tags/html-header-tags.component';
import { LinksAndButtonsComponent } from './components/links-and-buttons/links-and-buttons.component';
import { AmbiguousLinksComponent } from './components/ambiguous-links/ambiguous-links.component';
import { LanguageAttributeComponent } from './components/language-attribute/language-attribute/language-attribute.component';
import { NavigationComponent, SectionInfoDialog } from './components/navigation/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    TopbarComponent,
    ColorContrastComponent,
    AltTextComponent,
    FormLabelsComponent,
    FocusComponent,
    HtmlHeaderTagsComponent,
    LinksAndButtonsComponent,
    AmbiguousLinksComponent,
    LanguageAttributeComponent,
    NavigationComponent,
    SectionInfoDialog
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HighlightJsModule,

    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent],
  entryComponents: [SectionInfoDialog]
})
export class AppModule { }
