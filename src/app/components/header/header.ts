import { Component, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AzioniHeader } from "../azioni-header/azioni-header";


@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, AzioniHeader],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
  // utilizziamo signal per la dinamicità del dato
  titolo = signal('NG Ecomm')
}
