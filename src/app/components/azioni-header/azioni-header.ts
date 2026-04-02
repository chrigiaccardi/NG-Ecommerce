import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-azioni-header',
  imports: [MatButtonModule, MatIconModule, MatIconButton, RouterLink],
  templateUrl: './azioni-header.html',
  styleUrl: './azioni-header.css',
})
export class AzioniHeader {}
