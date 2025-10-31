import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/pagina-inicial/pagina-inicial').then((m) => m.PaginaInicial),
  },
  {
    path: 'contacto',
    loadComponent: () => import('./components/contacto/contacto').then((m) => m.Contacto),
  },
  {
    path: 'historia',
    loadComponent: () => import('./components/historia/historia').then((m) => m.Historia),
  },
];
