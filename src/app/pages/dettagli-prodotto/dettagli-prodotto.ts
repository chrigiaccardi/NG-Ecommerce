import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { InfoProdotto } from "./info-prodotto/info-prodotto";
import { VistaRecensioni } from "./vista-recensioni/vista-recensioni";

@Component({
  selector: 'app-dettagli-prodotto',
  imports: [BottoneIndietro, InfoProdotto, VistaRecensioni],
  templateUrl: './dettagli-prodotto.html',
  styleUrl: './dettagli-prodotto.css',
})
export default class DettagliProdotto {
  // iniettiamo lo store per poter utilizzarlo
  store = inject(EcommerceStore)

  // idProdotto in input con l'input binding impostato nel config inserisce direttamente nella route l'id del prodotto 
  idProdotto = input.required<string>();

  // Carichiamo i seguenti metodi nel costructor così che partano immediatamente non appena è tutto caricato
  constructor() {
    this.store.setIdProdotto(this.idProdotto)
    this.store.setSeoTagsProdotti(this.store.selezioneProdotto)
  }

  // creiamo routeIniziale per gestire con un signal computed la ruote da dove arriviamo, se da una categoria specifica
  // oppure da tutti i prodotti

  routeIniziale = computed(() => `/prodotti/${this.store.categoria()}`)
}
