import { Component, input } from '@angular/core';
import { RecensioneUtente } from '../../../models/recensione-utente';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { StelleRecensioni } from "../../../components/stelle-recensioni/stelle-recensioni";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recensione-singola',
  imports: [PannelloCarrello, StelleRecensioni, DatePipe],
  templateUrl: './recensione-singola.html',
  styleUrl: './recensione-singola.css',
})
export class RecensioneSingola {
  // facciamo arrivare i dati recensione in input
  recensione = input.required<RecensioneUtente>();
}
