import { Component, inject, signal } from '@angular/core';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { NonNullableFormBuilder, Validators} from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EcommerceStore } from '../../../ecommerce-store';
import { OpzioniItem } from '../../../models/opzioni-item';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-scrivi-recensione',
  imports: [PannelloCarrello, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatSelectModule, MatIcon],
  templateUrl: './scrivi-recensione.html',
  styleUrl: './scrivi-recensione.css',
})
export class ScriviRecensione {
  // iniettiamo il form builder per poter gestire il form
  fb = inject(NonNullableFormBuilder);

  // iniettiamo store per poterlo utilizzare
  store = inject(EcommerceStore)

  // Opzioni per il select da selezionare
  opzioniRating = signal<OpzioniItem[]>([
    {label: '5 stelle - Eccellente', valore: 5},
    {label: '4 stelle - Buono', valore: 4},
    {label: '3 stelle - Nella Media', valore: 3},
    {label: '2 stelle - Scarso', valore: 2},
    {label: '1 stella - Terribile', valore: 1}
  ])

  // Creazione e definizione del gruppo form
  formNuovaRecensione = this.fb.group({
    titolo: ['', Validators.required],
    commento: ['', Validators.required],
    rating: ['5', Validators.required]
  })

  // metodo per il salvataggio delle recensioni
  salvaRecensione() {

  }
}
