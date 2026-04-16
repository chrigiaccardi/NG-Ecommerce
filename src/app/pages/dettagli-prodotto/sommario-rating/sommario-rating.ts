import { Component, computed, input } from '@angular/core';
import { Prodotto } from '../../../models/prodotto';
import { StelleRecensioni } from "../../../components/stelle-recensioni/stelle-recensioni";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-sommario-rating',
  imports: [StelleRecensioni, MatIconModule],
  templateUrl: './sommario-rating.html',
  styleUrl: './sommario-rating.css',
})
export class SommarioRating {
  // iniettiamo i valori di prodotto per poterli utilizzare
  prodotto = input.required<Prodotto>();

  // con recensioni totali abbiamo il numero totale di recensioni per quel prodotto
  recensioniTotali = computed(() => this.prodotto().recensioni.length);

  // i livelli rating fanno vedere il livello di quante recensioni ci sono per ogni stella
  livelliRating = computed(() => {
    // recupera i dati recensioni e il numero totale di recensioni
    const recensioni = this.prodotto().recensioni;
    const recensioniTotali = recensioni.length;

    // se recensioni totali = 0 ritorna l'array 5,4,3,2,1 con un nuovo array di oggetti per ogni numero con stette, conteggio 0 e percentuale 0
    if (recensioniTotali === 0)
      return [5, 4, 3, 2, 1].map((stelle) => ({ stelle, conteggio: 0, percentuale: 0 }));

    //conteggi seleziona i 5 array e per ogni stella
    const conteggi = [5, 4, 3, 2, 1].map((stelle) => {
      // per ogni livello di stelle conte quante sono le recensioni con stelle uguale al rating di ogni recensione
      const conteggio = recensioni.filter((recensione) => recensione.rating === stelle).length;
      // ritorna l'oggetto con la stella specifica, quante recensioni ci sono per ogni stella e la percentuale che è il conteggio diviso il n totale *100
      return { stelle, conteggio, percentuale: (conteggio / recensioniTotali) * 100 };
    });
    // alla fine ritorna i conteggi (oggetti) per ogni stella
    return conteggi;
  });
}

