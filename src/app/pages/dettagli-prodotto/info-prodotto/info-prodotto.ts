import { Component, inject, input, signal } from '@angular/core';
import { Prodotto } from '../../../models/prodotto';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { StatoDisponibilitaProdotto } from "../stato-disponibilita-prodotto/stato-disponibilita-prodotto";
import { SelettoreQuantita } from "../../../components/selettore-quantita/selettore-quantita";
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { EcommerceStore } from '../../../ecommerce-store';
import { MatIcon } from "@angular/material/icon";
import { BottoneToggle } from "../../../components/bottone-toggle/bottone-toggle";
import { StelleRecensioni } from "../../../components/stelle-recensioni/stelle-recensioni";

@Component({
  selector: 'app-info-prodotto',
  imports: [TitleCasePipe, StatoDisponibilitaProdotto, CurrencyPipe, SelettoreQuantita, MatAnchor, MatIcon, BottoneToggle, MatIconButton, StelleRecensioni],
  templateUrl: './info-prodotto.html',
  styleUrl: './info-prodotto.css',
})
export class InfoProdotto {
  // istanziamo prodotto per poter ricevere i dati.
  prodotto = input.required<Prodotto>();

  // per la quantità creiamo un signal con valore di default 1
  quantita = signal(1)

  // iniettiamo lo store per poterlo utilizzare
  store = inject (EcommerceStore)
}
