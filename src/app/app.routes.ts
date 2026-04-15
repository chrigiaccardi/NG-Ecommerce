import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'prodotti/tutti', pathMatch: 'full'},

    // utilizziamo loadComponent per far si che il componente venga caricato solamente quando richiesto e non tutto subito nella home
    // utilizziamo withComponentInputBinding per legare automaticamente le route agli input, per utilizzarlo lo inseriamo in app.config

    // route per le selezioni delle categorie
    { path: 'prodotti/:categoria', loadComponent: () => import('./pages/griglia-prodotti/griglia-prodotti') },
    // route per i dettagli dei singoli prodotti
    { path: 'prodotto/:idProdotto', loadComponent: () => import('./pages/dettagli-prodotto/dettagli-prodotto') },
    // route per la lista desideri
    { path: 'lista-desideri', loadComponent: () => import('./pages/lista-desideri/lista-desideri') },
    // route per il carrello
    { path: 'carrello', loadComponent: () => import('./pages/carrello/carrello') },
    // route per la sezione del checkout
    { path: 'checkout', loadComponent: () => import('./pages/checkout/checkout') },
    // route per la visualizzazione dell'ordine completato con successo
    { path: 'ordine-completato', loadComponent: () => import('./pages/ordine-completato/ordine-completato')},

];
