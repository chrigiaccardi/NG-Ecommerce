import { Component, computed, inject, input } from '@angular/core';
import { Prodotto } from '../../../models/prodotto';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { SommarioRating } from "../sommario-rating/sommario-rating";
import { RecensioneSingola } from "../recensione-singola/recensione-singola";
import { MatButtonModule } from "@angular/material/button";
import { EcommerceStore } from '../../../ecommerce-store';
import { ScriviRecensione } from "../scrivi-recensione/scrivi-recensione";

@Component({
  selector: 'app-vista-recensioni',
  imports: [PannelloCarrello, SommarioRating, RecensioneSingola, MatButtonModule, ScriviRecensione],
  templateUrl: './vista-recensioni.html',
  styleUrl: './vista-recensioni.css',
})
export class VistaRecensioni {
  // iniettiamo i valori di prodotto per poterli utilizzare
  prodotto = input.required<Prodotto>();

  // iniettiamo store per poterlo utilizzare
  store = inject(EcommerceStore)

  // creiamo un computed (si ricalcola solo quando prodotto.recensioni cambia)
  // per poter avere come prima recensione sempre quella più recente.
  ordineRecensioni = computed(() => {
    // con lo spread operator [...] crea un nuovo array visto che il signalStore crea immutabilità:
    // non mutare mai gli array originali. .sort riordina gli elementi di un array
    // secondo una logica personalizzata tramite funzione comparatrice.
    // a elemento corrente b elemento successivo. a - b dal più vecchio al nuvo (piccolo a grande), b - a viceversa
    return [...this.prodotto().recensioni].sort((a, b) => b.dataRecensione.getTime() - a.dataRecensione.getTime());
  })
}
