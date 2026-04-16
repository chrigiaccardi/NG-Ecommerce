import { Component, computed, input } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-stelle-recensioni',
  imports: [MatIconModule],
  templateUrl: './stelle-recensioni.html',
  styleUrl: './stelle-recensioni.css',
})
export class StelleRecensioni {
  // iniettiamo un numero rating per la valutazione del prodotto
  rating = input.required<number>();

  // creiamo un array stelle dove la valutazione completa è vera o falsa
  arrayStelle = computed(() => {
    // math.floor arrotonda per difetto il valore di rating
    const massimoStelle = Math.floor(this.rating());
    // ritorna 5 array vuoti, fill li riempie ognuno con false e map trasforma ogni
    // elemento in index da 0 a 4 (5 index) e li confronta con massimoStelle
    // se è sotto massimo stelle da vero se sopra da falso
    return Array(5).fill(false).map((_, index) => index < massimoStelle);
});

}
