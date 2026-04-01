import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  
  // utilizziamo signal per la dinamicità del dato
  titolo = signal('NG Ecomm')
}
