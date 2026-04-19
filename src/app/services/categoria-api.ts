import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
  
  // Creiamo il service con tutte le categorie per scalabilità: non ci sono le categorie arcodate nel file route,
  // dovessimo cambiare le categoria in auto per esempio modifichiamo solo il service e siamo aposto.
export class CategoriaApi {
  private categorie = ['tutti', 'elettronica', 'abbigliamento', 'casa', 'sport', 'libri', 'bellezza']

  getCategorie() {
    return this.categorie;
  }
}
