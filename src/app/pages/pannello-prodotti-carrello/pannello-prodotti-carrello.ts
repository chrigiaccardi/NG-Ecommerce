import { Component, input } from '@angular/core';
import { ProdottiCarrello } from '../../models/prodotti-carrello';

@Component({
  selector: 'app-pannello-prodotti-carrello',
  imports: [],
  templateUrl: './pannello-prodotti-carrello.html',
  styleUrl: './pannello-prodotti-carrello.css',
})
export class PannelloProdottiCarrello {
  // iniettiamo prodotto dal parent per utilizzare i dati anche qua dentro
  prodotto = input.required<ProdottiCarrello>();
}
