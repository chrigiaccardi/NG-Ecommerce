import { Component, inject } from '@angular/core';
import { BottoneIndietro } from "../../components/bottone-indietro/bottone-indietro";
import { FormSpedizione } from "./form-spedizione/form-spedizione";
import { FormPagamento } from "./form-pagamento/form-pagamento";
import { SommarioOrdine } from "../../components/sommario-ordine/sommario-ordine";
import { EcommerceStore } from '../../ecommerce-store';
import { CurrencyPipe } from '@angular/common';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-checkout',
  imports: [BottoneIndietro, FormSpedizione, FormPagamento, SommarioOrdine, CurrencyPipe, MatAnchor, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export default class Checkout {
  // Iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore)
}
