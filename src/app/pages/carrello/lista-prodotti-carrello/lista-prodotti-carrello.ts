import { Component, inject } from '@angular/core';
import { PannelloCarrello } from '../../../directives/pannello-carrello';
import { EcommerceStore } from '../../../ecommerce-store';

@Component({
  selector: 'app-lista-prodotti-carrello',
  imports: [PannelloCarrello],
  templateUrl: './lista-prodotti-carrello.html',
  styleUrl: './lista-prodotti-carrello.css',
})
export class ListaProdottiCarrello {
  // Iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore)
}
