import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'flag',
    loadComponent: () => import('./page/flag-list/flag-list').then((m) => m.FlagList),
  },
];
