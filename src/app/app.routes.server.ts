// Utilizziamo il Prerender al posto del SSR per ottimizzazione, il prerender genera HTML statico build-time
  // per le route specifiche, in questo caso le categorie: prodotti/:categoria è una ruote dinamica.
  // Molto comodo anche per la manutenibilità e scalabilità: Se voglio cambio il get categorie dal service
  // con categorie di auto e lui in automatico crea le tot pagina HTML per ogni categoria.

  // NG Build chiama getPrerenderParams e il service restituisce le tot pagine delle categorie,
  // molto conveniente anche lato SEO, ci saranno 7 pagine indicizzate per ogni categoria al posto di una
  // sola per i prodotti tutti insieme.

  // come possiamo vedere dopo ng build vengono creati gli HTML statici all'interno della cartella prodotti nella cartella browser in dist

import { inject } from '@angular/core';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { CategoriaApi } from './services/categoria-api';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'prodotti/:categoria',
    // build-time render -> definizione prerender
    renderMode: RenderMode.Prerender,
    // utilizziamo dei parametri specifici per il prerender in modalità async
    getPrerenderParams: async () => {
      // carica il sevice categoria api
      const catService = inject(CategoriaApi)
      const nomiCategorie = catService.getCategorie();
      // ritorna per ogni categoria una route specifica, di conseguenza vengono create 7 pagine 
      // distinte per categorie al posto di solo una prodotti
      return nomiCategorie.map((nome) => ({categoria: nome}))
    },
  },

  // Impostiamo queste pagine come Client, visto che sono pagine "personali", vengono renderizzate nel
  // proprio PC e non indicizzate dal Browser, quindi solo storage/session, No SEO
  {
    path: 'carrello',
    renderMode: RenderMode.Client
  },
  {
    path: 'checkout',
    renderMode: RenderMode.Client
  },
  {
    path: 'ordine-completato',
    renderMode: RenderMode.Client
  },
  {
    path: 'lista-desideri',
    renderMode: RenderMode.Client
  },

  // Impostiamo che tutte le pagine ** altre a quelle selezionate prima per Client e Prerender siano Server
  {
    path: '**',
    renderMode: RenderMode.Server
  },
];
