import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-ordine-completato',
  imports: [MatIconModule, MatAnchor, RouterLink],
  templateUrl: './ordine-completato.html',
  styleUrl: './ordine-completato.css',
})
export default class OrdineCompletato {}
