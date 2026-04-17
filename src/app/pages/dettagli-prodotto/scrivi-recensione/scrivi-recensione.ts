import { Component, inject } from '@angular/core';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { NonNullableFormBuilder, Validators, ɵInternalFormsSharedModule } from "@angular/forms";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-scrivi-recensione',
  imports: [PannelloCarrello, ɵInternalFormsSharedModule, MatInput],
  templateUrl: './scrivi-recensione.html',
  styleUrl: './scrivi-recensione.css',
})
export class ScriviRecensione {
  //
  fb = inject(NonNullableFormBuilder);

  //
  formNuovaRecensione = this.fb.group({
    titolo: ['', Validators.required]
    commento: ['', Validators.required]
    rating: ['', Validators.required]
  })
}
