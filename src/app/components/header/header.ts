import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AzioniHeader } from "../azioni-header/azioni-header";
import { RouterLink } from "@angular/router";
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, AzioniHeader, RouterLink, MatAnchor, MatIconButton, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
  // utilizziamo signal per la dinamicità del dato
  titolo = signal('NG Ecomm')

  // apertura e chiusura della sidenav
  @Output() sidenavToggle = new EventEmitter()
  sidenavAperta = false

  toggleSidenav() {
    this.sidenavAperta = !this.sidenavAperta;
    this.sidenavToggle.emit();
  }

}
