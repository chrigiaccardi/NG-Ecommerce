// Questo file viene creato per contenere tutti i prodotti ed avere un file condivisibile ovunque.
// Per questo utilizziamo NGRX Signals Store che istalliamo (ng add @ngrx/signals).
// È basato sui signals nativi, withState definisce lo stato iniziale, withComputed si ricalcola automaticamente
// quando cambiano le dipendenze e withMethods sono le funzioni per aggiornare lo sato.
// devono sempre andare in questo ordine presiso: withState, withComputed, withMethods.

import { computed, inject } from "@angular/core";
import { Prodotto } from "./models/prodotto"
import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { produce } from 'immer';
import { Toaster } from "./services/toaster";
import { ProdottiCarrello } from "./models/prodotti-carrello";
import { MatDialog } from "@angular/material/dialog";
import { SignIn } from "./components/sign-in/sign-in";
import { SignInParams, SignUpParams, User } from "./models/user";
import { Router } from "@angular/router";
import { Ordine } from "./models/ordine";

// Istalliamo e importiamo @angular-architects/ngrx-toolkit:
// pacchetto ufficiale di estensioni per NgRx Signals Store creato per semplificare lo state
// management e la sync automatica con backend/storage
import { withStorageSync } from '@angular-architects/ngrx-toolkit';
import { AggiungiRecensioniParametri, RecensioneUtente } from "./models/recensione-utente";
import { RecensioneSingola } from "./pages/dettagli-prodotto/recensione-singola/recensione-singola";


export type EcommerceState = {
  prodotti: Prodotto[];
  categoria: string;
  listaDesideriItems: Prodotto[];
  prodottiCarrello: ProdottiCarrello[];
  user: User | undefined;

  caricamento: boolean;
  selezioneIdProdotto: string | undefined,

  scriviRecensione: boolean;

}

export const EcommerceStore = signalStore(
  // providedIn : -> root rende il signalStore globale a livello di scope e useremo la funzione inject
  // per iniettarlo nel componente dove ci servono questi specifici dati
  { providedIn: 'root' },
    
  // withState definisce lo stato iniziale, i vari signals iniziali pronti per essere modificati o utilizzati
  withState({

    prodotti:[
  // ELETTRONICA
  {
    id: '1',
    name: 'Smartphone XPro 12',
    description: 'Smartphone con display AMOLED e fotocamera da 64MP.',
    price: 699.99,
    imageUrl: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?w=500&auto=format&fit=crop&q=60',
    rating: 4.5,
    reviewCount: 120,
    inStock: true,
    category: 'elettronica',
    recensioni: [
      { id: 'r1-1', idProdotto: '1', nomeUtente: 'Luca Bianchi', urlImgUtente: 'https://i.pravatar.cc/150?u=luca', rating: 5, titolo: 'Eccezionale', commento: 'Display stupendo e batteria infinita. Molto soddisfatto.', dataRecensione: new Date('2026-03-10') },
      { id: 'r1-2', idProdotto: '1', nomeUtente: 'Sara Rossi', urlImgUtente: 'https://i.pravatar.cc/150?u=sara', rating: 4, titolo: 'Ottimo smartphone', commento: 'Veloce e reattivo, l\'unico difetto è che scivola facilmente dalle mani.', dataRecensione: new Date('2026-02-15') }
    ]
  },
  {
    id: '2',
    name: 'Cuffie Wireless NoiseFree',
    description: 'Cuffie con cancellazione del rumore e autonomia di 30 ore.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    rating: 5,
    reviewCount: 85,
    inStock: true,
    category: 'elettronica',
    recensioni: [
      { id: 'r2-1', idProdotto: '2', nomeUtente: 'Marco Verdi', urlImgUtente: 'https://i.pravatar.cc/150?u=marco', rating: 5, titolo: 'Spettacolari', commento: 'Cancellazione del rumore top. Perfette per l\'ufficio.', dataRecensione: new Date('2026-04-01') },
      { id: 'r2-2', idProdotto: '2', nomeUtente: 'Giulia Neri', urlImgUtente: 'https://i.pravatar.cc/150?u=giulia', rating: 5, titolo: 'Le adoro', commento: 'Comodissime e la batteria dura tantissimo, le carico una volta a settimana.', dataRecensione: new Date('2026-01-20') }
    ]
  },
  {
    id: '3',
    name: 'Smartwatch FitLife',
    description: 'Orologio intelligente con monitoraggio attività e battito cardiaco.',
    price: 89.99,
    imageUrl: 'https://media.istockphoto.com/id/2197192316/it/foto/orologio-intelligente.webp',
    rating: 4.2,
    reviewCount: 60,
    inStock: true,
    category: 'elettronica',
    recensioni: [
      { id: 'r3-1', idProdotto: '3', nomeUtente: 'Antonio Fabbri', urlImgUtente: 'https://i.pravatar.cc/150?u=antonio', rating: 4, titolo: 'Buon rapporto qualità prezzo', commento: 'Fa il suo dovere per il tracciamento sportivo. App migliorabile.', dataRecensione: new Date('2025-11-05') },
      { id: 'r3-2', idProdotto: '3', nomeUtente: 'Elena Gialli', urlImgUtente: 'https://i.pravatar.cc/150?u=elena', rating: 5, titolo: 'Perfetto per i miei allenamenti', commento: 'Preciso nel battito e bello da vedere.', dataRecensione: new Date('2026-02-11') }
    ]
  },
  {
    id: '4',
    name: 'Tablet MediaPlus 10',
    description: 'Tablet da 10 pollici ideale per lavoro e intrattenimento.',
    price: 249.99,
    imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&auto=format&fit=crop&q=60',
    rating: 4.1,
    reviewCount: 40,
    inStock: false,
    category: 'elettronica',
    recensioni: [
      { id: 'r4-1', idProdotto: '4', nomeUtente: 'Lorenzo Costa', urlImgUtente: 'https://i.pravatar.cc/150?u=lorenzo', rating: 4, titolo: 'Ottimo per Netflix', commento: 'Schermo luminoso, ottimo per guardare serie TV. Fotocamere non eccezionali.', dataRecensione: new Date('2026-03-22') },
      { id: 'r4-2', idProdotto: '4', nomeUtente: 'Martina Ricci', urlImgUtente: 'https://i.pravatar.cc/150?u=martina', rating: 4, titolo: 'Valido per lo studio', commento: 'Lo uso all\'università ed è comodo, ma un po\' pesante.', dataRecensione: new Date('2025-10-18') }
    ]
  },

  // ABBIGLIAMENTO
  {
    id: '5',
    name: 'T-shirt Basic Cotone',
    description: 'Maglietta in cotone 100% disponibile in vari colori.',
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60',
    rating: 3.0,
    reviewCount: 150,
    inStock: true,
    category: 'abbigliamento',
    recensioni: [
      { id: 'r5-1', idProdotto: '5', nomeUtente: 'Paolo Romano', urlImgUtente: 'https://i.pravatar.cc/150?u=paolo', rating: 2, titolo: 'Si restringe', commento: 'Dopo il primo lavaggio si è rimpicciolita parecchio. Peccato.', dataRecensione: new Date('2026-02-01') },
      { id: 'r5-2', idProdotto: '5', nomeUtente: 'Chiara Marino', urlImgUtente: 'https://i.pravatar.cc/150?u=chiara', rating: 4, titolo: 'Cotone di buona qualità', commento: 'Per il prezzo va benissimo, veste un po\' larga.', dataRecensione: new Date('2026-03-30') }
    ]
  },
  {
    id: '6',
    name: 'Jeans Slim Fit',
    description: 'Jeans aderenti dal design moderno.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=500&auto=format&fit=crop&q=60',
    rating: 4.4,
    reviewCount: 90,
    inStock: true,
    category: 'abbigliamento',
    recensioni: [
      { id: 'r6-1', idProdotto: '6', nomeUtente: 'Stefano Greco', urlImgUtente: 'https://i.pravatar.cc/150?u=stefano', rating: 5, titolo: 'Vestibilità perfetta', commento: 'Il tessuto è leggermente elasticizzato, comodissimi.', dataRecensione: new Date('2025-12-10') },
      { id: 'r6-2', idProdotto: '6', nomeUtente: 'Francesca Leone', urlImgUtente: 'https://i.pravatar.cc/150?u=francesca', rating: 4, titolo: 'Belli', commento: 'Bel colore, tengono bene la forma anche dopo l\'uso frequente.', dataRecensione: new Date('2026-01-25') }
    ]
  },
  {
    id: '7',
    name: 'Giacca Invernale WarmPro',
    description: 'Giacca imbottita resistente al freddo intenso.',
    price: 119.99,
    imageUrl: 'https://images.unsplash.com/photo-1715608720717-ac3d1b638e44?w=500&auto=format&fit=crop&q=60',
    rating: 2.6,
    reviewCount: 70,
    inStock: true,
    category: 'abbigliamento',
    recensioni: [
      { id: 'r7-1', idProdotto: '7', nomeUtente: 'Giacomo Conti', urlImgUtente: 'https://i.pravatar.cc/150?u=giacomo', rating: 2, titolo: 'Non molto calda', commento: 'Per il prezzo mi aspettavo tenesse più caldo, cerniera fragile.', dataRecensione: new Date('2025-11-20') },
      { id: 'r7-2', idProdotto: '7', nomeUtente: 'Silvia Bruno', urlImgUtente: 'https://i.pravatar.cc/150?u=silvia', rating: 3, titolo: 'Solo estetica', commento: 'Molto bella da vedere ma i materiali non sono eccelsi.', dataRecensione: new Date('2026-01-05') }
    ]
  },
  {
    id: '8',
    name: 'Sneakers Urban Style',
    description: 'Scarpe sportive comode per uso quotidiano.',
    price: 69.99,
    imageUrl: 'https://media.istockphoto.com/id/925328590/it/foto/scarpe-da-corsa.webp',
    rating: 4.3,
    reviewCount: 110,
    inStock: false,
    category: 'abbigliamento',
    recensioni: [
      { id: 'r8-1', idProdotto: '8', nomeUtente: 'Roberto Gallo', urlImgUtente: 'https://i.pravatar.cc/150?u=roberto', rating: 5, titolo: 'Comode per camminare', commento: 'Sembra di camminare sulle nuvole, taglia perfetta.', dataRecensione: new Date('2026-03-05') },
      { id: 'r8-2', idProdotto: '8', nomeUtente: 'Alessia De Santis', urlImgUtente: 'https://i.pravatar.cc/150?u=alessia', rating: 4, titolo: 'Buone', commento: 'Ottimo design, si sporcano facilmente ma si lavano in lavatrice senza problemi.', dataRecensione: new Date('2026-04-12') }
    ]
  },

  // CASA
  {
    id: '9',
    name: 'Lampada LED Moderna',
    description: 'Lampada da tavolo con luce regolabile.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1766411503489-c6fe7b008bd6?w=500&auto=format&fit=crop&q=60',
    rating: 3.2,
    reviewCount: 55,
    inStock: true,
    category: 'casa',
    recensioni: [
      { id: 'r9-1', idProdotto: '9', nomeUtente: 'Matteo Ferrari', urlImgUtente: 'https://i.pravatar.cc/150?u=matteo', rating: 3, titolo: 'Carina ma instabile', commento: 'Fa una bella luce ma la base è troppo leggera e tende a cadere.', dataRecensione: new Date('2025-09-15') },
      { id: 'r9-2', idProdotto: '9', nomeUtente: 'Valentina Fiore', urlImgUtente: 'https://i.pravatar.cc/150?u=valentina', rating: 4, titolo: 'Ottima luce', commento: 'Design minimale molto bello per la scrivania. Touch reattivo.', dataRecensione: new Date('2026-02-28') }
    ]
  },
  {
    id: '10',
    name: 'Set Pentole Acciaio',
    description: 'Set di pentole in acciaio inox per ogni esigenza.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1584990347193-6bebebfeaeee?w=500&auto=format&fit=crop&q=60',
    rating: 4.5,
    reviewCount: 75,
    inStock: true,
    category: 'casa',
    recensioni: [
      { id: 'r10-1', idProdotto: '10', nomeUtente: 'Lucia Rinaldi', urlImgUtente: 'https://i.pravatar.cc/150?u=lucia', rating: 5, titolo: 'Qualità eccellente', commento: 'Acciaio pesante, fondo spesso. Perfette anche per induzione.', dataRecensione: new Date('2026-01-10') },
      { id: 'r10-2', idProdotto: '10', nomeUtente: 'Davide Gatti', urlImgUtente: 'https://i.pravatar.cc/150?u=davide', rating: 4, titolo: 'Molto valide', commento: 'Si puliscono facilmente in lavastoviglie. Consigliate.', dataRecensione: new Date('2025-12-02') }
    ]
  },
  {
    id: '11',
    name: 'Aspirapolvere TurboClean',
    description: 'Aspirapolvere potente e silenzioso.',
    price: 159.99,
    imageUrl: 'https://media.istockphoto.com/id/1489556409/it/foto/aspirapolvere.webp',
    rating: 4.4,
    reviewCount: 65,
    inStock: true,
    category: 'casa',
    recensioni: [
      { id: 'r11-1', idProdotto: '11', nomeUtente: 'Giorgio Moretti', urlImgUtente: 'https://i.pravatar.cc/150?u=giorgio', rating: 5, titolo: 'Potenza pura', commento: 'Aspira benissimo i peli del gatto dai tappeti. Maneggevole.', dataRecensione: new Date('2026-03-08') },
      { id: 'r11-2', idProdotto: '11', nomeUtente: 'Federica Ruju', urlImgUtente: 'https://i.pravatar.cc/150?u=federica', rating: 4, titolo: 'Buon prodotto', commento: 'Non è super silenzioso come descritto, ma la potenza compensa.', dataRecensione: new Date('2026-02-14') }
    ]
  },
  {
    id: '12',
    name: 'Cuscino Memory Foam',
    description: 'Cuscino ergonomico per un sonno confortevole.',
    price: 29.99,
    imageUrl: 'https://media.istockphoto.com/id/2207660314/it/foto/cuscino.webp',
    rating: 5.0, // Aggiustato per coerenza, prima era 5.3
    reviewCount: 50,
    inStock: true,
    category: 'casa',
    recensioni: [
      { id: 'r12-1', idProdotto: '12', nomeUtente: 'Simone Riva', urlImgUtente: 'https://i.pravatar.cc/150?u=simone', rating: 5, titolo: 'Mai più dolori', commento: 'Mi svegliavo sempre con dolore alla cervicale, questo cuscino ha risolto il problema.', dataRecensione: new Date('2026-01-22') },
      { id: 'r12-2', idProdotto: '12', nomeUtente: 'Laura Santini', urlImgUtente: 'https://i.pravatar.cc/150?u=laura', rating: 5, titolo: 'Dormo benissimo', commento: 'Sostiene il collo alla perfezione. Inizialmente ha un po\' di odore di fabbrica, passa in 2 giorni.', dataRecensione: new Date('2026-04-05') }
    ]
  },

  // SPORT
  {
    id: '13',
    name: 'Tappetino Yoga Comfort',
    description: 'Tappetino antiscivolo per yoga e fitness.',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=60',
    rating: 4.5,
    reviewCount: 80,
    inStock: true,
    category: 'sport',
    recensioni: [
      { id: 'r13-1', idProdotto: '13', nomeUtente: 'Caterina Dalla', urlImgUtente: 'https://i.pravatar.cc/150?u=caterina', rating: 5, titolo: 'Spessore perfetto', commento: 'Non fa male le ginocchia e grip eccellente, non scivola.', dataRecensione: new Date('2025-10-12') },
      { id: 'r13-2', idProdotto: '13', nomeUtente: 'Enrico Piras', urlImgUtente: 'https://i.pravatar.cc/150?u=enrico', rating: 4, titolo: 'Ottimo per allenarsi in casa', commento: 'Si pulisce facilmente. Unica pecca: è un po\' pesante da portare in palestra.', dataRecensione: new Date('2026-03-14') }
    ]
  },
  {
    id: '14',
    name: 'Manubri Regolabili',
    description: 'Set di pesi regolabili per allenamento a casa.',
    price: 79.99,
    imageUrl: 'https://images.unsplash.com/photo-1703668984128-b506579acdd2?w=500&auto=format&fit=crop&q=60',
    rating: 4.6,
    reviewCount: 95,
    inStock: true,
    category: 'sport',
    recensioni: [
      { id: 'r14-1', idProdotto: '14', nomeUtente: 'Dario Monti', urlImgUtente: 'https://i.pravatar.cc/150?u=dario', rating: 5, titolo: 'Ideali per l\'home gym', commento: 'Cambiare i dischi è veloce e la valigetta è comodissima.', dataRecensione: new Date('2026-02-05') },
      { id: 'r14-2', idProdotto: '14', nomeUtente: 'Andrea Barbieri', urlImgUtente: 'https://i.pravatar.cc/150?u=andrea', rating: 4, titolo: 'Robusti', commento: 'Dischi in ghisa di buona qualità. Le impugnature sono un po\' ruvide.', dataRecensione: new Date('2026-01-18') }
    ]
  },
  {
    id: '15',
    name: 'Bici da Città UrbanBike',
    description: 'Bicicletta comoda per spostamenti urbani.',
    price: 299.99,
    imageUrl: 'https://images.unsplash.com/photo-1627363707801-543bdb44faf3?w=500&auto=format&fit=crop&q=60',
    rating: 1.2,
    reviewCount: 40,
    inStock: false,
    category: 'sport',
    recensioni: [
      { id: 'r15-1', idProdotto: '15', nomeUtente: 'Vincenzo Serra', urlImgUtente: 'https://i.pravatar.cc/150?u=vincenzo', rating: 1, titolo: 'Arrivata difettosa', commento: 'I freni non funzionavano e il telaio era graffiato.', dataRecensione: new Date('2025-11-25') },
      { id: 'r15-2', idProdotto: '15', nomeUtente: 'Michela Ferri', urlImgUtente: 'https://i.pravatar.cc/150?u=michela', rating: 1, titolo: 'Soldi buttati', commento: 'Pesantissima e il cambio si è rotto dopo due settimane. Pessima.', dataRecensione: new Date('2026-03-01') }
    ]
  },
  {
    id: '16',
    name: 'Scarpe Running ProRun',
    description: 'Scarpe leggere per corsa e allenamento.',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&auto=format&fit=crop&q=60',
    rating: 4.4,
    reviewCount: 120,
    inStock: true,
    category: 'sport',
    recensioni: [
      { id: 'r16-1', idProdotto: '16', nomeUtente: 'Pietro Lombardi', urlImgUtente: 'https://i.pravatar.cc/150?u=pietro', rating: 5, titolo: 'Reattive e leggere', commento: 'Ho migliorato i miei tempi. Ammortizzazione eccezionale sull\'asfalto.', dataRecensione: new Date('2026-04-10') },
      { id: 'r16-2', idProdotto: '16', nomeUtente: 'Serena Colombo', urlImgUtente: 'https://i.pravatar.cc/150?u=serena', rating: 4, titolo: 'Buone scarpe da training', commento: 'Belle esteticamente e comode, attenzione alle taglie, calzano piccole.', dataRecensione: new Date('2026-02-20') }
    ]
  },

  // LIBRI
  {
    id: '17',
    name: 'Il Mistero della Notte',
    description: 'Romanzo thriller avvincente.',
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1610703032634-182905cc3d7b?w=500&auto=format&fit=crop&q=60',
    rating: 4.1,
    reviewCount: 30,
    inStock: true,
    category: 'libri',
    recensioni: [
      { id: 'r17-1', idProdotto: '17', nomeUtente: 'Ilaria Villa', urlImgUtente: 'https://i.pravatar.cc/150?u=ilaria', rating: 4, titolo: 'Finale inaspettato', commento: 'Letto tutto d\'un fiato. L\'inizio è lento ma poi decolla.', dataRecensione: new Date('2025-08-30') },
      { id: 'r17-2', idProdotto: '17', nomeUtente: 'Tommaso Conte', urlImgUtente: 'https://i.pravatar.cc/150?u=tommaso', rating: 5, titolo: 'Coinvolgente', commento: 'La trama è costruita benissimo e i personaggi sono realistici.', dataRecensione: new Date('2026-01-15') }
    ]
  },
  {
    id: '18',
    name: 'Guida alla Programmazione',
    description: 'Manuale pratico per sviluppatori.',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?w=500&auto=format&fit=crop&q=60',
    rating: 0.7,
    reviewCount: 60,
    inStock: true,
    category: 'libri',
    recensioni: [
      { id: 'r18-1', idProdotto: '18', nomeUtente: 'Alessandro Marini', urlImgUtente: 'https://i.pravatar.cc/150?u=alessandro', rating: 1, titolo: 'Pieno di errori', commento: 'Il codice di esempio non compila e ci sono tantissimi errori di battitura.', dataRecensione: new Date('2026-02-10') },
      { id: 'r18-2', idProdotto: '18', nomeUtente: 'Giulia De Luca', urlImgUtente: 'https://i.pravatar.cc/150?u=giulia2', rating: 1, titolo: 'Obsoleto', commento: 'Tratta versioni di framework ormai vecchie di anni. Inutile.', dataRecensione: new Date('2025-12-05') }
    ]
  },
  {
    id: '19',
    name: 'Cucina Italiana Tradizionale',
    description: 'Ricette autentiche della cucina italiana.',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500&auto=format&fit=crop&q=60',
    rating: 4.5,
    reviewCount: 45,
    inStock: true,
    category: 'libri',
    recensioni: [
      { id: 'r19-1', idProdotto: '19', nomeUtente: 'Nonna Maria', urlImgUtente: 'https://i.pravatar.cc/150?u=nonnamaria', rating: 5, titolo: 'Ricette vere', commento: 'Proprio come le cucinava mia madre. Ottimo libro.', dataRecensione: new Date('2026-03-25') },
      { id: 'r19-2', idProdotto: '19', nomeUtente: 'Gabriele Sarti', urlImgUtente: 'https://i.pravatar.cc/150?u=gabriele', rating: 4, titolo: 'Bellissime foto', commento: 'Tante ricette interessanti, alcune forse un po\' troppo complesse.', dataRecensione: new Date('2026-01-08') }
    ]
  },
  {
    id: '20',
    name: 'Mindfulness Quotidiana',
    description: 'Libro per migliorare il benessere mentale.',
    price: 15.99,
    imageUrl: 'https://images.unsplash.com/photo-1760161627217-3f0124023664?w=500&auto=format&fit=crop&q=60',
    rating: 3.3,
    reviewCount: 38,
    inStock: true,
    category: 'libri',
    recensioni: [
      { id: 'r20-1', idProdotto: '20', nomeUtente: 'Martino Parisi', urlImgUtente: 'https://i.pravatar.cc/150?u=martino', rating: 3, titolo: 'Un po\' ripetitivo', commento: 'I concetti sono buoni ma si dilunga troppo sugli stessi temi.', dataRecensione: new Date('2025-10-10') },
      { id: 'r20-2', idProdotto: '20', nomeUtente: 'Eleonora Basile', urlImgUtente: 'https://i.pravatar.cc/150?u=eleonora', rating: 4, titolo: 'Utile per lo stress', commento: 'Esercizi pratici molto interessanti da applicare tutti i giorni.', dataRecensione: new Date('2026-04-02') }
    ]
  },

  // BELLEZZA
  {
    id: '21',
    name: 'Crema Viso Idratante',
    description: 'Crema nutriente per tutti i tipi di pelle.',
    price: 22.99,
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60',
    rating: 4.4,
    reviewCount: 70,
    inStock: true,
    category: 'bellezza',
    recensioni: [
      { id: 'r21-1', idProdotto: '21', nomeUtente: 'Sofia Caruso', urlImgUtente: 'https://i.pravatar.cc/150?u=sofia', rating: 5, titolo: 'Lascia la pelle morbida', commento: 'Si assorbe subito e non unge. Profumo delicato molto piacevole.', dataRecensione: new Date('2026-03-12') },
      { id: 'r21-2', idProdotto: '21', nomeUtente: 'Alice Fontana', urlImgUtente: 'https://i.pravatar.cc/150?u=alice', rating: 4, titolo: 'Buona per pelli miste', commento: 'Idrata bene ma d\'estate è forse un pelo troppo pesante.', dataRecensione: new Date('2025-07-25') }
    ]
  },
  {
    id: '22',
    name: 'Shampoo Nutriente',
    description: 'Shampoo delicato per capelli secchi.',
    price: 9.99,
    imageUrl: 'https://images.unsplash.com/photo-1701992678972-d5a053ad0fb0?w=500&auto=format&fit=crop&q=60',
    rating: 4.2,
    reviewCount: 55,
    inStock: true,
    category: 'bellezza',
    recensioni: [
      { id: 'r22-1', idProdotto: '22', nomeUtente: 'Claudio Bianco', urlImgUtente: 'https://i.pravatar.cc/150?u=claudio', rating: 4, titolo: 'Buon INCI', commento: 'Pulisce bene senza aggredire. Fa un po\' poca schiuma.', dataRecensione: new Date('2026-01-15') },
      { id: 'r22-2', idProdotto: '22', nomeUtente: 'Beatrice Sala', urlImgUtente: 'https://i.pravatar.cc/150?u=beatrice', rating: 5, titolo: 'Capelli rinati', commento: 'In combo con il balsamo ha curato le mie doppie punte.', dataRecensione: new Date('2026-02-28') }
    ]
  },
  {
    id: '23',
    name: 'Profumo Elegance',
    description: 'Fragranza raffinata e duratura.',
    price: 59.99,
    imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60',
    rating: 4.6,
    reviewCount: 90,
    inStock: true,
    category: 'bellezza',
    recensioni: [
      { id: 'r23-1', idProdotto: '23', nomeUtente: 'Valerio D\'Amico', urlImgUtente: 'https://i.pravatar.cc/150?u=valerio', rating: 5, titolo: 'Moltissimi complimenti', commento: 'Ogni volta che lo indosso qualcuno mi chiede che profumo sia.', dataRecensione: new Date('2026-04-05') },
      { id: 'r23-2', idProdotto: '23', nomeUtente: 'Giorgia Rizzi', urlImgUtente: 'https://i.pravatar.cc/150?u=giorgia', rating: 4, titolo: 'Elegante', commento: 'Fragranza floreale non banale. Dura tranquillamente tutta la giornata lavorativa.', dataRecensione: new Date('2025-11-10') }
    ]
  },
  {
    id: '24',
    name: 'Set Trucco Completo',
    description: 'Kit makeup con tutto il necessario.',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=500&auto=format&fit=crop&q=60',
    rating: 4.3,
    reviewCount: 65,
    inStock: false,
    category: 'bellezza',
    recensioni: [
      { id: 'r24-1', idProdotto: '24', nomeUtente: 'Veronica Coppola', urlImgUtente: 'https://i.pravatar.cc/150?u=veronica', rating: 5, titolo: 'Perfetto da regalare', commento: 'L\'ho regalato a mia sorella e ha apprezzato tantissimo la varietà di colori.', dataRecensione: new Date('2025-12-24') },
      { id: 'r24-2', idProdotto: '24', nomeUtente: 'Elisa Gatti', urlImgUtente: 'https://i.pravatar.cc/150?u=elisa', rating: 4, titolo: 'Qualità buona', commento: 'Gli ombretti sono ben pigmentati. I pennelli inclusi invece sono così così.', dataRecensione: new Date('2026-03-02') }
    ]
  }
],
    categoria: 'tutti',
    listaDesideriItems: [],
    prodottiCarrello: [],
    user: undefined,
    caricamento: false,
    selezioneIdProdotto: undefined,
    scriviRecensione: false,
  } as EcommerceState),

  // utilizziamo il metodo withStorageSync per poter automaticamente salvare quello che necessitiamo
  // nel localStorage così che al refresh non si perdano i dati.
  withStorageSync({
    key: 'NG-Ecommerce',
    select: ({listaDesideriItems, prodottiCarrello, user}) => ({listaDesideriItems, prodottiCarrello, user}),
  }),
    
  // withComputed setta e definisce gli aggiornamenti finali dei signal
  withComputed((store) => ({
    // prodotti filtrati: computed (crea un signal derivato, si ricalcola automaticamente ed è readonly)
    //  legge i due signal prodotti e categoria, filtra prodotti e ritorna i p che hanno la category = alla categoria
    // mostrata tutta in lowerCase
    prodottiFiltrati: computed(() => {
          
      // se categoria è uguale a tutti ritorna tutti i prodotti, se no ritorna i prodotti filtrati in base alla categoria
      if (store.categoria() === 'tutti') return store.prodotti();
      return store.prodotti().filter(p => p.category === store.categoria().toLowerCase());
    }),
      
    // conteggio lista desideri aggiorna il signal con computer con io numero degli items presenti all'interno della lista desideri
    conteggioListaDesideri: computed(() => store.listaDesideriItems().length),
        
    // conteggio carrello che aggiorna il signal con computed con il numero di prodotti presenti all'interno del carrello.
    // reduce trasforma l'array in un singolo valore: acc è l'accomulatore e item l'elemento corrente, entrambi in ingresso.
    // 0 è il valore iniziale e ogni volta somma la quantità dell'item all'accomulatore partendo da 0.
    // il matBadge così si aggiorna non in base ai prodotti nell'array ma alla quantità totale dell'array.
    conteggioCarrello: computed(() => store.prodottiCarrello().reduce((acc, item) => acc + item.quantita, 0)),

     // con selezione Prodotto andiamo a selezionare il prodotto specifico in base al suo ID per poter
    // visualizzare i dettagli del prodotto cliccato
    selezioneProdotto: computed(() => store.prodotti().find((p) => p.id === store.selezioneIdProdotto()))
  })),

   
  
  // con withMethod creiamo dei metodi per aggiornare gli stati, in questo caso set categoria accoglie in input una categoria string
  // e la va a settare nello store aggiornando solamente lo stato categoria.
  // signalMethod restituisce un signal al posto di void, utile per operazioni asincrone con reattività.
  withMethods((store, toaster = inject(Toaster), matDialog = inject(MatDialog), router = inject(Router)) => ({

    // setta la categoria per la route
    setCategoria: signalMethod<string>((categoria: string) => {
      patchState(store, { categoria })
    }),

    // setta ID prodotto per la route
    setIdProdotto: signalMethod<string>((idProdotto: string) => {
      patchState(store, {selezioneIdProdotto: idProdotto})
    }),

    // Aggiunge un prodotto alla lista desideri
    aggiungiAllaListaDesideri: (prodotto: Prodotto) => {
      // prendamo lo stato attuale della lista desideri (signal)
      const aggiornamentoItemListDesideri = produce(store.listaDesideriItems(), (draft) => {
        // crea una copia mutabile del signal con immer (installato antecedente npm i immer)
        // quando il draft non è stato trovato
        if (!draft.find(p => p.id === prodotto.id)) {
          // pusha la copia dentro l'array della lista desideri
          draft.push(prodotto);
        }
      });
      // aggiorna la lista desideri con l'ultimo aggiornamento
      patchState(store, { listaDesideriItems: aggiornamentoItemListDesideri });
      // utilizziamo il toaster per mandare un 'popup' all'utente e confermare l'aggiunta del prodotto alla lista desideri
      toaster.success('Prodotto aggiunto dalla Lista Desideri')
    },

    // Rimuove un prodotto dalla lista dei desideri
    rimuoviDallaListaDesideri: (prodotto: Prodotto) => {
      patchState(store, {
        // aggiorna gli item filtrando tutti quelli che sono diversi e di conseguenza togliendo quello con id uguale
        listaDesideriItems: store.listaDesideriItems().filter((p) => p.id !== prodotto.id)
      });
      toaster.success('Prodotto rimosso dalla Lista Desideri');
    },

    // ripulisce la lista dei desideri 
    pulisciListaDesideri: () => {
      // aggiorna la lista desideri ad un array vuoto quindi cancella tutti i prodotti
      patchState(store, { listaDesideriItems: [] })
    },

    // aggiunge al carrello un prodotto
    aggiungiAlCarrello: (prodotto: Prodotto, quantita = 1) => {
      // istanziamo l'esistenza del prodotto per controllare subito se il prodotto esiste oppure no
      const esistenzaProdotto = store.prodottiCarrello().findIndex(i => i.prodotto.id === prodotto.id);
        
      // utilizziamo immer per una copia immutabile e una modifica sicura
      const aggiornamentoItemCarrello = produce(store.prodottiCarrello(), (draft) => {

        // verifichiamo l'esistenza con diverso da -1 perchè findIndex sopra restituisce la posizione nell'array.
        // se trova l'id confrontato restituisce 0,1,2 in base alla posizione, se non trovato restituisce di default -1.
        // Quindi se è diverso da -1 aggiorna la quantità se invece uguale pusha il prodotto dentro l'array.
        if (esistenzaProdotto !== -1) {
          draft[esistenzaProdotto].quantita += quantita;
          return;
        }
        draft.push({
          prodotto, quantita
        })
      });
        
      // aggiornamento di prodottiCarrello con il metodo aggiornamento.
      patchState(store, { prodottiCarrello: aggiornamentoItemCarrello });

      // Sia qua che sopra utilizziamo il -1 perchè l'array parte da 0 e quindi -1 vuol dire che non esiste il prodotto nell'array
      toaster.success(esistenzaProdotto !== -1 ? 'Prodotto Nuovamente Aggiunto' : 'Prodotto aggiunto al Carrello')
    },

    // setta la quandita dei prodotti nel carrello
    setQuantitaProdotto: (params: { idProdotto: string, quantita: number }) => {
      const index = store.prodottiCarrello().findIndex(c => c.prodotto.id === params.idProdotto)
      const aggiornamento = produce(store.prodottiCarrello(), (draft) => {
        draft[index].quantita = params.quantita
      });
      patchState(store, { prodottiCarrello: aggiornamento })
    },

    // aggiunge tutta la lista desideri al carrello
    aggiungiListaDesideriAlCarrello: () => {
      const aggiornamentoItemCarrello = produce(store.prodottiCarrello(), (draft) => {
        store.listaDesideriItems().forEach(p => {
          if (!draft.find(c => c.prodotto.id === p.id)) {
            draft.push({ prodotto: p, quantita: 1 })
          }
        })
      });
      // patchState aggiorna i prodotti nel carrello e azzera l'array della lista desideri
      patchState(store, { prodottiCarrello: aggiornamentoItemCarrello, listaDesideriItems: [] })
    },

    // aggiunge un prodotto alla lista desideri e aggiorna il carrello
    daCarrelloAListaDesideri: (prodotto: Prodotto) => {
      // aggiorniamo il carrello rimuovendo il prodotto
      const aggiornamentoItemCarrello = store.prodottiCarrello().filter((p => p.prodotto.id !== prodotto.id));

      const aggiornamentoItemListDesideri = produce(store.listaDesideriItems(), (draft) => {
        if (!draft.find(p => p.id === prodotto.id)) {
          draft.push(prodotto)
        }
      });
      patchState(store, { prodottiCarrello: aggiornamentoItemCarrello, listaDesideriItems: aggiornamentoItemListDesideri })
    },

    // rimuove il prodotto dal carrello
    rimuoviDalCarrello: (prodotto: Prodotto) => {
      patchState(store, { prodottiCarrello: store.prodottiCarrello().filter(c => c.prodotto.id !== prodotto.id) })
    },

    // con checkoutDialog al click apriamo il dialog per il signIn. Il disableClose true impedisce al dialog 
    // di chiudersi se clicchiamo nel background.
    // data.checkout true conferma al MAT_DIALOG_DATA che il dialog è stato aperto nella pagina checkout.
    checkoutDialog: () => {
      if (!store.user()) {
        matDialog.open(SignIn, {
          disableClose: true,
          data: {
            checkout: true
          }
        }) 
        return;
      };
      router.navigate(['/checkout'])
   
    },

    // metodo per concludere ed effettuare l'ordine
    concludiOrdine: async() => {
      // impostiamo il caricamento a true
      patchState(store, { caricamento: true });
      // controlliamo che l'utente sia loggato prima di continuare, se non loggato rimettiamo il caricamento a false
      // se no rimane true con il bottone su pagamento i corso
      const user = store.user();
      if (!user) {
        toaster.error("Accedi al tuo Account prima di proseguire con l'ordine");
        patchState(store, { caricamento: false });
        return;
      }
      // istanziamo ordine per come deve essere strutturato: crypto.randomUUID genera un Unico Universale ID
      const ordine: Ordine = {
        id: crypto.randomUUID(),
        userId: user.id,
        totale: store.prodottiCarrello().reduce((acc, prodotto) => acc + (prodotto.quantita * prodotto.prodotto.price), 0),
        prodottiOrdine: store.prodottiCarrello(),
        statoPagamento: 'Successo'
      };
      // creiamo un effetto latenza di un secondo al metodo così che ci sia il caricamento di tutto
      await new Promise((risultato) => setTimeout(risultato, 1000))
      // nel'aggiornamento conclusivo dichiariamo che nello store, il caricamento è false, quindi terminato,
      // e il carrello si vuota
      patchState(store, { caricamento: false, prodottiCarrello: [] });
      // concluso il tutto impostiamo la navigazione verso la pagina di successo.
      router.navigate(['ordine-completato'])
    },

    // con signIn autentichiamo email e password per l'accesso al profilo, in ingresso abbiamo i parametri email, password, checkout e dialogId
    signIn: ({email, password, checkout, dialogId}: SignInParams) => {
      patchState(store, {
        user: {
          id: '1',
          email,
          name: 'Christian Giaccardi',
          imageUrl: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png'
        }
      });
      // impostiamo che il dialog specifico tramite id si chiuda all'autenticazione
      matDialog.getDialogById(dialogId)?.close();

      // se il checkout è vero vuol dire che abbiamo aperto il dialog dal bottone per il pagamento,
      // di conseguenza impostiamo la route verso il checkout. se invece false la route la impostiamo
      // verso la griglia prodotti
      if (checkout) {
        router.navigate(['/checkout']);
      }
    },

    // signUp è molto simile a signIn
    signUp: ({email, password, name, checkout, dialogId}: SignUpParams) => {
      patchState(store, {
        user: {
          id: '1',
          email,
          name: 'Christian Giaccardi',
          imageUrl: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png'
        }
      });
      // impostiamo che il dialog specifico tramite id si chiuda all'autenticazione
      matDialog.getDialogById(dialogId)?.close();

      // se il checkout è vero vuol dire che abbiamo aperto il dialog dal bottone per il pagamento,
      // di conseguenza impostiamo la route verso il checkout. se invece false la route la impostiamo
      // verso la griglia prodotti
      if (checkout) {
        router.navigate(['/checkout']);
      }
    },

    // signOut scollega il profilo
    signOut: () => {
      patchState(store, {user: undefined})
    },

    // apriDialogRecensione imposta il valore a scrivi recensione per aprire il dialog
    apriDialogRecensione: () => {
      patchState(store, {scriviRecensione: true})
    },
    chiudiDialogRecensione: () => {
      patchState(store, {scriviRecensione: false})
    },

    // aggiungiRecensione inserisce una nuova recensione del prodotto specifico.
    // creiamo un metodo async così da poter creare latenza e far vedere il bottone di caricamento
    // in ingresso abbiamo i parametri della nuova recensione
    aggiungiRecensione: async ({ titolo, commento, rating }: AggiungiRecensioniParametri) => {
      // impostiamo il caricamento su true
      patchState(store, { caricamento: true });
      // individuiamo il prodotto con find che l'id è uguale ad uno nell'array di prodotti
      const prodotto = store.prodotti().find((p) => p.id === store.selezioneIdProdotto());
      // se il prodotto non c'è blocca il caricamento
      if (!prodotto) {
        patchState(store, { caricamento: false });
        return
      }
      // la nuova recensione avrà questo formato con:
      // id numero cryptato. id prodotto, nome utente preso dal user loggato o vuoto
      // img presa dall'user loggato o vuoto, rating, titolo e commento da come 
      // inserito dal form e infine la data presa automaticamente come nuova data da sistema.
      const recensione: RecensioneUtente = {
        id: crypto.randomUUID(),
        idProdotto: prodotto.id,
        nomeUtente: store.user()?.name || '',
        urlImgUtente: store.user()?.imageUrl || '',
        rating,
        titolo,
        commento,
        dataRecensione: new Date(),
      };

      // utilizziamo produce da immer, permette di mutare draft come se fosse mutabile e produce array/ogetti immutabili automaticamente
      // produce copia l'array store.prodotti() e passa ad una versione mutabile
      const aggiornamentoProdotti = produce(store.prodotti(), (draft) => {
        // index trova il prodotto tramite confronto dall'array copia draft -> index = al prodotto selezionato
        const index = draft.findIndex((p) => p.id === prodotto.id);
        // ora essendo draft mutabile pushamo la recensione dentro l'array recensioni di quel prodotto
        draft[index].recensioni.push(recensione);
        // ora ricalcoliamo il rating
        draft[index].rating =
          // Math.round serve per fare l'arrotondamento preciso
          Math.round(
            // reduce crea un unico numero sommandoli tutti partendo da 0
            (draft[index].recensioni.reduce((acc, r) => acc + r.rating, 0)
              // diviso il numero di recensioni che si sono (la lunghezza dell'array recensioni)
              // la moltiplichiamo per 10 per avere il numero intero con la virgola e lo arrotondiamo
              // di conseguenza diviso 10 verrà un numero con solo una cifra dietro alla virgola
              / draft[index].recensioni.length) * 10) / 10;
        // aggiorniamo il conteggio delle recensioni con il numero della linghezza dell'array quindi di quante recensioni ci sono
        draft[index].reviewCount = draft[index].recensioni.length;
      });

      // essendo che la funzione è async utilizziamo l'await per farla partire in ritardo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // aggiorniamo i vari parametri come caricamento false per cambiare il bottone, aggiorniamo l'array
      // dei prodotti così che abbia le nuove recensioni e scrivi recensione false per chiudere il pannello
      patchState(store, { caricamento: false, prodotti: aggiornamentoProdotti, scriviRecensione: false });
      toaster.success('La recensione è stata aggiunta con successo');
    },
  })
  )
)