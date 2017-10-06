import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ColorContrastComponent } from "./components/color-contrast/color-contrast.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'color_contrast', component: ColorContrastComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);