import { Component, inject, Input, input, signal } from '@angular/core';
import { CardProdotto } from "../../components/card-prodotto/card-prodotto";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';
import { BottoneToggle } from "../../components/bottone-toggle/bottone-toggle";
import { BtnSidenav } from '../../services/btn-sidenav';


@Component({
  selector: 'app-griglia-prodotti',
  imports: [CardProdotto, MatSidenavModule, MatListModule, RouterLink, TitleCasePipe, BottoneToggle],
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
    this.store.setCategoria(this.categoria);
    this.store.setListaProdottiSeoTags(this.categoria)
  }
  
  // import btn-sidenav service
  sidenav = inject(BtnSidenav)
}