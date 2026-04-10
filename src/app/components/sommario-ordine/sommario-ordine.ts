import { Component, computed, inject } from '@angular/core';
import { PannelloCarrello } from "../../directives/pannello-carrello";
import { EcommerceStore } from '../../ecommerce-store';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-sommario-ordine',
  imports: [PannelloCarrello, CurrencyPipe],
  templateUrl: './sommario-ordine.html',
  styleUrl: './sommario-ordine.css',
})
export class SommarioOrdine {
  // Iniettiamo lo store per poter utilizzare i dati
  store = inject(EcommerceStore);

  // il subtotale fa la somma di tutti i prodotti per le quantità richieste dall'utente:
  // acc è l'accomulatore che parte da 0 dove aggiungiamo la moltiplicazione del prezzo per la quantità.
  subtotale = computed(() => this.store.prodottiCarrello().reduce((acc, item) => acc + (item.prodotto.price * item.quantita), 0));

  // calcoliamo l'iva separata così che si veda il netto e il prezzo totale finito al fondo
  iva = computed(() => 0.22 * this.subtotale());

  totaleOrdine = computed(() => this.subtotale() + this.iva())
}
