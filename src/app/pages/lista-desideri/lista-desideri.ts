import { Component, inject } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { EcommerceStore } from '../../ecommerce-store';
import { CardProdotto } from "../../components/card-prodotto/card-prodotto";
import { BottoneToggle } from "../../components/bottone-toggle/bottone-toggle";

@Component({
  selector: 'app-lista-desideri',
  imports: [BottoneIndietro, CardProdotto, BottoneToggle],
  templateUrl: './lista-desideri.html',
  styleUrl: './lista-desideri.css',
})
  
  // Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class ListaDesideri {
  store = inject(EcommerceStore)
}
