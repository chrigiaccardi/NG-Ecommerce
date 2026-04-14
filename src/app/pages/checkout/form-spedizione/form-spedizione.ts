import { Component } from '@angular/core';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-form-spedizione',
  imports: [PannelloCarrello, MatIconModule, MatFormFieldModule, MatInput],
  templateUrl: './form-spedizione.html',
  styleUrl: './form-spedizione.css',
})
export class FormSpedizione {}
