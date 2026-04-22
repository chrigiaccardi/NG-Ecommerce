import { Component, inject } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { EcommerceStore } from '../../ecommerce-store';
import { CardProdotto } from "../../components/card-prodotto/card-prodotto";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListaDesideriVuota } from "./lista-desideri-vuota/lista-desideri-vuota";
import { NgClass } from '@angular/common';
import { SeoManager } from '../../services/seo-manager';

@Component({
  selector: 'app-lista-desideri',
  imports: [BottoneIndietro, CardProdotto, MatIconModule, MatButtonModule, ListaDesideriVuota, NgClass],
  templateUrl: './lista-desideri.html',
  styleUrl: './lista-desideri.css',
})
  
  // Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class ListaDesideri {
  store = inject(EcommerceStore)
  seoManager = inject(SeoManager)

  // Carichiamo il constructor
  constructor() {
    this.seoManager.caricamentoSeoTags({
      titolo: 'La Mia Lista Desideri',
      descrizione: 'Visualizza i tuoi Prodotti salvati'
    })
  }
}
