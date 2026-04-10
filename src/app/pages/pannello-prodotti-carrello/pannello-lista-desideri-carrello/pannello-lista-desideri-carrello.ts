import { Component, inject } from '@angular/core';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { MatIconModule } from "@angular/material/icon";
import { EcommerceStore } from '../../../ecommerce-store';
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-pannello-lista-desideri-carrello',
  imports: [PannelloCarrello, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './pannello-lista-desideri-carrello.html',
  styleUrl: './pannello-lista-desideri-carrello.css',
})
export class PannelloListaDesideriCarrello {
  // iniettiamo lo store per poter utilizzare i dati
  store = inject(EcommerceStore)
}
