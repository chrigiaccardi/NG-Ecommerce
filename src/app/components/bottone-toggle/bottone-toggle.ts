import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { Prodotto } from '../../models/prodotto';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-bottone-toggle',
  imports: [MatIconModule],
  templateUrl: './bottone-toggle.html',
  styleUrl: './bottone-toggle.css',
})
export class BottoneToggle {
  // con il property binding vengono iniettati i dati per poterli utilizzare anche qua dentro, required viene utilizzato per far si
  // che i dati siano obbligatori in ingresso
  prodotto = input.required<Prodotto>()

    // Iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore)

  // creiamo un computed signals per confermre se il prodotto è già nella lista desideri confrontando l'id già presenti con quello in immissione
  presenteNellaListaDesideri = computed(() => this.store.listaDesideriItems().find(p => p.id === this.prodotto().id))

  // creiamo il metodo per poter aggiungere il prodotto alla lista desideri
  toggleListaDesideri(prodotto: Prodotto) {
    if (this.presenteNellaListaDesideri()) {
      this.store.rimuoviDallaListaDesideri(prodotto);
    } else {
      this.store.aggiungiDallaListaDesideri(prodotto);
    }
  }
}
