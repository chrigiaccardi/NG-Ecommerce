import { Component, computed, inject, input, signal } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CardProdotto } from "../../components/card-prodotto/card-prodotto";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';


@Component({
  selector: 'app-griglia-prodotti',
  imports: [CardProdotto, MatSidenavModule, MatListModule, RouterLink, TitleCasePipe],
  templateUrl: './griglia-prodotti.html',
  styleUrl: './griglia-prodotti.css',
})
  
// Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class GrigliaProdotti {

  // inizializziamo categoria con l'input per l'inputBinding della route
  categoria = input<string>('tutti');
  // signal array per tutte le categorie di prodotti
  categorie = signal<string[]>(['tutti', 'elettronica', 'abbigliamento', 'casa', 'sport', 'libri', 'bellezza'])
  // iniettiamo lo store per poter utilizzare i suoi dati
  store = inject(EcommerceStore)
  // Il constructor rende il metodo subito disponibile e pronto all'utilizzo
  constructor() {
    this.store.setCategoria(this.categoria)
  }

  aggiungiAlCarrello(prodotto:Prodotto) {
    
  }
}