import { Component, computed, inject, input, output } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-card-prodotto',
  imports: [CurrencyPipe, MatAnchor, MatIcon, MatIconButton],
  templateUrl: './card-prodotto.html',
  styleUrl: './card-prodotto.css',
})
export class CardProdotto {
  // con il property binding vengono iniettati i dati per poterli utilizzare anche qua dentro, required viene utilizzato per far si
  // che i dati siano obbligatori in ingresso
  prodotto = input.required<Prodotto>()

  // questo metodo output prende il click e il prodotto e lo emette al parent per far si che venga aggiunto al'array del carrello 
  clickAcquista = output<Prodotto>()

  // Iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore)

  // creiamo un computed signals per confermre se il prodotto è già nella lista desideri confrontando l'id già presenti con quello in immissione
  presenteNellaListaDesideri = computed(() => this.store.listaDesideriItems().find(p => p.id === this.prodotto().id))

  // creiamo il metodo per poter aggiungere il prodotto alla lista desideri
  toggleListaDesideri(prodotto: Prodotto) {
    if (this.presenteNellaListaDesideri()) {
      // rimuovi il prodotto
    } else {
      this.store.aggiungiAllaListaDesideri(prodotto);
    }
  }
}
