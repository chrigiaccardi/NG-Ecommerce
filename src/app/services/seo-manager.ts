import { DOCUMENT, inject, Injectable, REQUEST } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../models/seo-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SeoManager {

  // Iniettiamo Title e Meta da platform-browser per poterli rendere dinamici per il lato SEO - Titolo e Metadati
  titolo = inject(Title)
  meta = inject(Meta);

  // REQUEST è un injectionToken univoco per l'oggetto httpRequest, questo per avere il valore del token associato.
  // aggiungiamo optional true perchè nel caso fosse CSR e non lo trova blocca il codice. Invece così anche se non
  // lo trova ed è undefined può gestire l'if del CSR
  richiesta = inject(REQUEST, { optional: true })
  
  // DOCUMENT ugualmente è un injetionToken è rappresenta l'oggetto document del DOM. Utilizziamo questo metodo
  // perchè node.JS non ha un DOM visto che non è un browser. Con il token angular da la possibilità
  // di usufruirne in entrambi i casi sia SSR che CSR. Browser CSR rappresentazione reale del document,
  // in SSR rappresentazione virtuale del documento tramite jsdom
  document = inject(DOCUMENT)

  // iniettiamo il router così che, per i tag canonical possiamo importare dinamicamente il link giusto della pagina
  router = inject(Router)

  // creiamo dei default del nome del sito e dell'immagine
  private readonly nomeSito = "NG Ecomm";
  private readonly imgDefault = 'https://ngcommerce.io/images/logo/logo-transparent.svg'
  
  // creiamo un metodo per caricare dinamicamente, in base alla pagina che siamo, i metatag SEO
  caricamentoSeoTags(seoData: SeoData) {
    // titolo che vediamo nel nome della scheda che apriamo, setTitle cambia il testo nel tag title
    this.titolo.setTitle(`${seoData.titolo} | ${this.nomeSito}`);

    // metatag description, vengono scritti in inglese perchè così il browser carica giusto il contenuto nel head
    // updateTag scrive o aggiorna un metaTag con parametri name per la tipologia e content per il contenuto
    this.meta.updateTag({ name: 'description', content: seoData.descrizione });

    // Impostazione canonical link, se siamo SSR prende link da header, se siamo CSR lo prende da window (browser)
    let origin = '';
    // se richiesta esiste siamo nel SSR, se il servizio gira nel browser allora è undefined/falsy
    if (this.richiesta) {
      // confermiamo la tipologia Headers | undefined per confermare a TypeScript
      const headers = this.richiesta.headers as Headers | undefined;

      // estrazione protocollo: lettura Header HTTP x-forwareded-proto: quando il server è dietro un proxy, il proxy aggiunge
      // questo header per dire al backend se la richiesta originale era HTTP o HTTPS.
      // Se non esiste allora tiralo fuori dallo stesso URL oppure se non esiste nulla https.
      const protocollo =
        (headers?.get('x-forwarded-proto') || this.richiesta.url.split(':')[0] || 'https') + '://';
      
      // stessa cosa qua, estrazione host, lo estrae dal header del proxy, se non esiste host standard se no stringa vuota
      const host = headers?.get('x-formarded-host') || headers?.get('host') || '';

      // costruzione di origin, se host esiste allora concatena protocollo con host, altrimenti stringa vuota
      origin = host ? `${protocollo}${host}` : '';
      
      // Se invece siamo CSR quindi window è diverso da undefined (stringa)
    } else if (typeof window !== 'undefined') {
      // origine del browser preso dal browser stesso
      origin = window.location.origin;
    }

    // Infine url finale completo è la concatenazione dell'origin + il percorso router.
    const fullUrl = `${origin}${this.router.url}`;

    // Creazione del link caconical nei metaTag per la SEO, con query selector selezioniamo il primo elemento HTML che matcha 
    // con il selettore e confermiamo che si tratta di un elemento link HTML
    let canonicalLink = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    // se il canonical link non esiste allora lo andiamo a creare: prima elemento, poi settiamo gli attributi
    // e gli appendiamo l'elemento figlio
    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonicalLink);
    }
    // ora esiste sia creato nuovo o vecchio e lo aggiorniamo impostando l'attributo href all'url finale completo generato prima
    canonicalLink.setAttribute('href', fullUrl);

    // In questa sezione impostiamo dinamicamente i metatag OG per i social media
    // imageUrl dinamicamente è o l'immagine che arriva dai seoDati oppure quella di default
    const imageUrl = seoData.image || this.imgDefault

    // Creiamo o aggiorniamo i vari metatag con le proprietà adibite e il loro contenuto che sia dinamico o no
    this.meta.updateTag({ property: 'og:type', content: seoData.tipo || 'website' });
    this.meta.updateTag({ property: 'og:site_name', content: this.nomeSito});
    this.meta.updateTag({ property: 'og:title', content: seoData.titolo });
    this.meta.updateTag({ property: 'og:description', content: seoData.descrizione});
    this.meta.updateTag({ property: 'og:url', content: fullUrl});
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:locale', content: 'it_IT' });

  }



}
