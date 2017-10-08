import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRouting } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MatTooltipModule, MatButtonModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import 'hammerjs';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';

import { TopbarComponent } from './components/topbar/topbar.component';
import { ColorContrastComponent } from './components/color-contrast/color-contrast.component';
import { AltTextComponent } from './components/alt-text/alt-text.component';
import { FormLabelsComponent } from './components/form-labels/form-labels.component';
import { FocusComponent } from './components/focus/focus.component';

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
    MatSnackBarModule
  ],
  providers: [HighlightJsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
