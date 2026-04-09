import { Component, input, output } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-selettore-quantita',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './selettore-quantita.html',
  styleUrl: './selettore-quantita.css',
})
export class SelettoreQuantita {

  // con quantità abbiamo in input una quantita di dafault invece l'aggiornata viene emessa per aggiornare il componente parent
  quantita = input(0)
  quantitaAggiornata = output<number>()
}
