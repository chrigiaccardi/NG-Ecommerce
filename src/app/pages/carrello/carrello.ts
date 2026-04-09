import { Component } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { ListaProdottiCarrello } from "./lista-prodotti-carrello/lista-prodotti-carrello";

@Component({
  selector: 'app-carrello',
  imports: [BottoneIndietro, ListaProdottiCarrello],
  templateUrl: './carrello.html',
  styleUrl: './carrello.css',
})
  
// Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class Carrello {

}
