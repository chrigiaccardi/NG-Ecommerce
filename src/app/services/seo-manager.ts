import { inject, Injectable, input, REQUEST } from '@angular/core';
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

  //
  richiesta = inject(REQUEST)

  // iniettiamo il router così che, per i tag canonical possiamo importare dinamicamente il link giusto della pagina
  router = inject(Router)

  // creiamo dei default del nome del sito e dell'immagine
  private readonly nomeSito = "NG Ecomm";
  private readonly imgDefault = 'https://ngcommerce.io/images/logo/logo-transparent.svg'
  
  // creiamo un metodo per caricare dinamicamente, in base alla pagina che siamo, i metatag SEO
  caricamentoSeoTags(seoData: SeoData) {
    // titolo che vediamo nel nome della scheda che apriamo
    this.titolo.setTitle(`${seoData.titolo} | ${this.titolo}`);
    // metatag description, vengono scritti in inglese perchè così il browser carica giusto il contenuto nel head
    this.meta.updateTag({ name: 'description', content: seoData.descrizione });

    // fullUrl sta per l'url del metatag canonical per l'URL giusto della pagina corrente
    let origine = '';
    if (this.richiesta) {
      const headers = this.richiesta.headers as Headers | undefined;
      const protocollo =
        (headers?.get('x-forwarded-proto') || this.richiesta.url.split(':')[0] || 'https') + '://';
      const host = headers?.get('x-formarded-proto') || headers?.get('host') || '';
      origin = host ? `&{protocollo}${host}` : '';
    } else if (typeof window !== undefined) {
      origine = window.location.origin;
    }
    const fullUrl = `${origin}${this.router.url}`;

  }



}
