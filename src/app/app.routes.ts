import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

export const AppRouting = RouterModule.forRoot(appRoutes);