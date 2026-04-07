import { Component, inject } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import {MatBadgeModule} from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce-store';
import { A11yModule } from "@angular/cdk/a11y";


@Component({
  selector: 'app-azioni-header',
  imports: [MatButtonModule, MatIconModule, MatIconButton, RouterLink, MatBadgeModule, A11yModule],
  templateUrl: './azioni-header.html',
  styleUrl: './azioni-header.css',
})
export class AzioniHeader {
  // iniettiamo lo store per poterlo utilizzare
  store = inject(EcommerceStore);

}
