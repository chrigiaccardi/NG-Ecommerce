import { Component } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";

@Component({
  selector: 'app-lista-desideri',
  imports: [BottoneIndietro],
  templateUrl: './lista-desideri.html',
  styleUrl: './lista-desideri.css',
})
  
  // Inseriamo nella classe default per far si che Angular sappia quale classe caricare nel lazy loading di loadComponent
export default class ListaDesideri {

}
