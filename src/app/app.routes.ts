import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'prodotti/tutti', pathMatch: 'full'},

    // utilizziamo loadComponent per far si che il componente venga caricato solamente quando richiesto e non tutto subito nella home
    // utilizziamo withComponentInputBinding per legare automaticamente le route agli input, per utilizzarlo lo inseriamo in app.config

    { path: 'prodotti/:categoria', loadComponent: () => import('./pages/griglia-prodotti/griglia-prodotti')},
    { path: 'lista-desideri', loadComponent: () => import('./pages/lista-desideri/lista-desideri')},

];
