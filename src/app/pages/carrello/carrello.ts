import { Component } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { ListaProdottiCarrello } from "./lista-prodotti-carrello/lista-prodotti-carrello";
import { PannelloListaDesideriCarrello } from "../pannello-prodotti-carrello/pannello-lista-desideri-carrello/pannello-lista-desideri-carrello";

@Component({
  selector: 'app-carrello',
  imports: [BottoneIndietro, ListaProdottiCarrello, PannelloListaDesideriCarrello],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
  
// Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class Carrello {

}
