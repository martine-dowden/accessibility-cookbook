import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ColorContrastComponent } from "./components/color-contrast/color-contrast.component";
import { AltTextComponent } from "./components/alt-text/alt-text.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'color_contrast', component: ColorContrastComponent },
  { path: 'alt_text', component: AltTextComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);