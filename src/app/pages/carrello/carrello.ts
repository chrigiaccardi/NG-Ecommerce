import { Component, inject } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { ListaProdottiCarrello } from "./lista-prodotti-carrello/lista-prodotti-carrello";
import { PannelloListaDesideriCarrello } from "../pannello-prodotti-carrello/pannello-lista-desideri-carrello/pannello-lista-desideri-carrello";
import { SommarioOrdine } from "../../components/sommario-ordine/sommario-ordine";
import { A11yModule } from "@angular/cdk/a11y";
import { MatAnchor } from "@angular/material/button";
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  selector: 'app-carrello',
  imports: [BottoneIndietro, ListaProdottiCarrello, PannelloListaDesideriCarrello, SommarioOrdine, A11yModule, MatAnchor],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
  
// Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class Carrello {
  store = inject(EcommerceStore)
}
