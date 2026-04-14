import { Component } from '@angular/core';
import { PannelloCarrello } from "../../../directives/pannello-carrello";
import { MatIconModule } from "@angular/material/icon";
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-form-pagamento',
  imports: [PannelloCarrello, MatIconModule, MatRadioModule],
  templateUrl: './form-pagamento.html',
  styleUrl: './form-pagamento.css',
})
export class FormPagamento {}
