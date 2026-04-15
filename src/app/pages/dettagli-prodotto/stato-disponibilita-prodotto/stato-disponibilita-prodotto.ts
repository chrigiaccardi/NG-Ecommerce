import { Component, input } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-stato-disponibilita-prodotto',
  imports: [MatIcon],
  templateUrl: './stato-disponibilita-prodotto.html',
  styleUrl: './stato-disponibilita-prodotto.css',
})
export class StatoDisponibilitaProdotto {
  inStock = input(false)
}
