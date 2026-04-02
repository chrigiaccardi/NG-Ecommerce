import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'prodotti', pathMatch: 'full'},

    // utilizziamo loadComponent per far si che il componente venga caricato solamente quando richiesto e non tutto subito nella home
    { path: 'prodotti', loadComponent: () => import('./pages/griglia-prodotti/griglia-prodotti')},
    { path: 'lista-desideri', loadComponent: () => import('./pages/lista-desideri/lista-desideri')},

];
