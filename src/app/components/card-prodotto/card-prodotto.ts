import { Component, input, output } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-card-prodotto',
  imports: [CurrencyPipe, MatAnchor, MatIcon],
  templateUrl: './card-prodotto.html',
  styleUrl: './card-prodotto.css',
})
export class CardProdotto {
  // con il property binding vengono iniettati i dati per poterli utilizzare anche qua dentro, required viene utilizzato per far si
  // che i dati siano obbligatori in ingresso
  prodotto = input.required<Prodotto>()

  // questo metodo output prende il click e il prodotto e lo emette al parent per far si che venga aggiunto al'array del carrello 
  clickAcquista = output<Prodotto>()
}
