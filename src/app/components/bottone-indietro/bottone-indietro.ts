import { Component, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-bottone-indietro',
  imports: [MatButtonModule, RouterLink, MatIconModule],
  templateUrl: './bottone-indietro.html',
  styleUrl: './bottone-indietro.css',
})
export class BottoneIndietro {
  label = input('');

  // andare verso resta vuoto così che dal parent posso impostarlo io ed avere un componente
  // bottone riutilizzabile
  andareVerso = input<string>()
}
