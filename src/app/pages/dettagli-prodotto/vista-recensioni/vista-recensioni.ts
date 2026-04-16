import { Component, input } from '@angular/core';
import { Prodotto } from '../../../models/prodotto';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { SommarioRating } from "../sommario-rating/sommario-rating";

@Component({
  selector: 'app-vista-recensioni',
  imports: [PannelloCarrello, SommarioRating],
  templateUrl: './vista-recensioni.html',
  styleUrl: './vista-recensioni.css',
})
export class VistaRecensioni {
  // iniettiamo i valori di prodotto per poterli utilizzare
  prodotto = input.required<Prodotto>();
}
