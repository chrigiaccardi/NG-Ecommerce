import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AzioniHeader } from "../azioni-header/azioni-header";
import { RouterLink } from "@angular/router";
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { EcommerceStore } from '../../ecommerce-store';
import { BtnSidenav } from '../../services/btn-sidenav';


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, AzioniHeader, RouterLink, MatAnchor, MatIconButton, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
  // utilizziamo signal per la dinamicità del dato
  titolo = signal('NG Ecomm')

  sidenav = inject(BtnSidenav)

}
