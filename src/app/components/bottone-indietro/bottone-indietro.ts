import { Component, inject, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-bottone-indietro',
  imports: [MatButtonModule, RouterLink, MatIconModule, NgClass],
  templateUrl: './bottone-indietro.html',
  styleUrl: './bottone-indietro.css',
})
export class BottoneIndietro {

  store = inject(EcommerceStore)
  // andare verso resta vuoto così che dal parent posso impostarlo io ed avere un componente
  // bottone riutilizzabile
  andareVerso = input<string>()
}
