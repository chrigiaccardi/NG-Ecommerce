import { Component, computed, inject, input, output } from '@angular/core';
import { Prodotto } from '../../models/prodotto';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce-store';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card-prodotto',
  imports: [CurrencyPipe, MatAnchor, MatIcon, RouterLink],
  templateUrl: './card-prodotto.html',
  styleUrl: './card-prodotto.css',
})
export class CardProdotto {
  // con il property binding vengono iniettati i dati per poterli utilizzare anche qua dentro, required viene utilizzato per far si
  // che i dati siano obbligatori in ingresso
  prodotto = input.required<Prodotto>()

  // iniettiamo Ecommerce-Store per poter utilizzare il metodo aggiungi al carrello al click del bottone
  store = inject(EcommerceStore)


}
