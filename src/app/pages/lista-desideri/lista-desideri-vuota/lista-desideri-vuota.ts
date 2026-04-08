import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-lista-desideri-vuota',
  imports: [MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './lista-desideri-vuota.html',
  styleUrl: './lista-desideri-vuota.css',
})
export class ListaDesideriVuota {

}
