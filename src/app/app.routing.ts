import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { TvsComponent } from './tvs/tvs.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'dogs',
    component: DogsComponent
  },
  {
    path: 'cats',
    component: CatsComponent
  },
  {
    path: 'tvs',
    component: TvsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
