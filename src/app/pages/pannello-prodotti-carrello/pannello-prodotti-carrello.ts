import { Component, computed, inject, input } from '@angular/core';
import { ProdottiCarrello } from '../../models/prodotti-carrello';
import { CurrencyPipe } from '@angular/common';
import { SelettoreQuantita } from "../../components/selettore-quantita/selettore-quantita";
import { EcommerceStore } from '../../ecommerce-store';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-pannello-prodotti-carrello',
  imports: [CurrencyPipe, SelettoreQuantita, MatButtonModule, MatIcon],
  templateUrl: './pannello-prodotti-carrello.html',
  styleUrl: './pannello-prodotti-carrello.css',
})
export class PannelloProdottiCarrello {
  // iniettiamo prodotto dal parent per utilizzare i dati anche qua dentro
  prodotto = input.required<ProdottiCarrello>();

  // iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore)

  // creiamo un metodo computed di aggiornamento totale così che il prezzo sia moltiplicato per le quantità.
  // to fixed serve per formattare il prezzo con due decimali

  totalePrezzoProdotto = computed(() => (this.prodotto().prodotto.price * this.prodotto().quantita).toFixed(2))
}
