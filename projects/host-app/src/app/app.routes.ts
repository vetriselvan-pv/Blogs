import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : 'remote',
        loadChildren : () => loadRemoteModule({
        remoteName: 'remoteApp',
        exposedModule: './routes',
      }).then((m) => { console.log(m); return m.routes}),
    },
    {
      path : 'docs',
      loadComponent : () => import('./page/docs/docs').then((m) => m.Docs)
    },
    {
      path: 'contact',
      loadComponent: () => import('./page/contact/contact').then((m) => m.Contact)
    }
];
