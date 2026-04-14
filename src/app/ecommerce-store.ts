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

export type EcommerceState = {
  prodotti: Prodotto[];
  categoria: string;
  listaDesideriItems: Prodotto[];
  prodottiCarrello: ProdottiCarrello[];
  user: User | undefined;
}

export const EcommerceStore = signalStore(
  // providedIn : -> root rende il signalStore globale a livello di scope e useremo la funzione inject
  // per iniettarlo nel componente dove ci servono questi specifici dati
  { providedIn: 'root' },
    
  // withState definisce lo stato iniziale, i vari signals iniziali pronti per essere modificati o utilizzati
  withState({
    prodotti: [
      // ELETTRONICA
      {
        id: '1',
        name: 'Smartphone XPro 12',
        description: 'Smartphone con display AMOLED e fotocamera da 64MP.',
        price: 699.99,
        imageUrl: 'https://images.unsplash.com/photo-1640936343842-268f9d87e764?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.5,
        reviewCount: 120,
        inStock: true,
        category: 'elettronica'
      },
      {
        id: '2',
        name: 'Cuffie Wireless NoiseFree',
        description: 'Cuffie con cancellazione del rumore e autonomia di 30 ore.',
        price: 129.99,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VmZmllJTIwd2lyZWxlc3N8ZW58MHx8MHx8fDA%3D',
        rating: 4.3,
        reviewCount: 85,
        inStock: true,
        category: 'elettronica'
      },
      {
        id: '3',
        name: 'Smartwatch FitLife',
        description: 'Orologio intelligente con monitoraggio attività e battito cardiaco.',
        price: 89.99,
        imageUrl: 'https://media.istockphoto.com/id/2197192316/it/foto/orologio-intelligente-con-monitoraggio-del-polso-cardiaco-sullo-schermo-isolato-su-grigio-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=gaXd_oC50Tp-93my9QBCky946tXBfl8RmIlMyE6CdJ4=',
        rating: 4.2,
        reviewCount: 60,
        inStock: true,
        category: 'elettronica'
      },
      {
        id: '4',
        name: 'Tablet MediaPlus 10',
        description: 'Tablet da 10 pollici ideale per lavoro e intrattenimento.',
        price: 249.99,
        imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFibGV0fGVufDB8fDB8fHww',
        rating: 4.1,
        reviewCount: 40,
        inStock: false,
        category: 'elettronica'
      },

      // ABBIGLIAMENTO
      {
        id: '5',
        name: 'T-shirt Basic Cotone',
        description: 'Maglietta in cotone 100% disponibile in vari colori.',
        price: 14.99,
        imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww',
        rating: 4.0,
        reviewCount: 150,
        inStock: true,
        category: 'abbigliamento'
      },
      {
        id: '6',
        name: 'Jeans Slim Fit',
        description: 'Jeans aderenti dal design moderno.',
        price: 49.99,
        imageUrl: 'https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnMlMjBzbGltJTIwZml0fGVufDB8fDB8fHww',
        rating: 4.4,
        reviewCount: 90,
        inStock: true,
        category: 'abbigliamento'
      },
      {
        id: '7',
        name: 'Giacca Invernale WarmPro',
        description: 'Giacca imbottita resistente al freddo intenso.',
        price: 119.99,
        imageUrl: 'https://images.unsplash.com/photo-1715608720717-ac3d1b638e44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpYWNjYSUyMGludmVybmFsZSUyMHdhcm0lMjBwcm98ZW58MHx8MHx8fDA%3D',
        rating: 4.6,
        reviewCount: 70,
        inStock: true,
        category: 'abbigliamento'
      },
      {
        id: '8',
        name: 'Sneakers Urban Style',
        description: 'Scarpe sportive comode per uso quotidiano.',
        price: 69.99,
        imageUrl: 'https://media.istockphoto.com/id/925328590/it/foto/scarpe-da-corsa-su-sfondo-bianco.webp?a=1&b=1&s=612x612&w=0&k=20&c=Iq_UI-BTbS7WHxulBCZ95wrbLJz6EndOC0OfoRAiO_0=',
        rating: 4.3,
        reviewCount: 110,
        inStock: false,
        category: 'abbigliamento'
      },

      // CASA
      {
        id: '9',
        name: 'Lampada LED Moderna',
        description: 'Lampada da tavolo con luce regolabile.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1766411503489-c6fe7b008bd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFtcGFkYSUyMGxlZCUyMG1vZGVybmF8ZW58MHx8MHx8fDA%3D',
        rating: 4.2,
        reviewCount: 55,
        inStock: true,
        category: 'casa'
      },
      {
        id: '10',
        name: 'Set Pentole Acciaio',
        description: 'Set di pentole in acciaio inox per ogni esigenza.',
        price: 89.99,
        imageUrl: 'https://images.unsplash.com/photo-1584990347193-6bebebfeaeee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V0JTIwcGVudG9sZSUyMGFjY2lhaW98ZW58MHx8MHx8fDA%3D',
        rating: 4.5,
        reviewCount: 75,
        inStock: true,
        category: 'casa'
      },
      {
        id: '11',
        name: 'Aspirapolvere TurboClean',
        description: 'Aspirapolvere potente e silenzioso.',
        price: 159.99,
        imageUrl: 'https://media.istockphoto.com/id/1489556409/it/foto/aspirapolvere-isolato-su-sfondo-bianco.webp?a=1&b=1&s=612x612&w=0&k=20&c=Bl4aBvrj84usnvziUXEzItvz4qxUXu3j4V6G1OGtPfg=',
        rating: 4.4,
        reviewCount: 65,
        inStock: true,
        category: 'casa'
      },
      {
        id: '12',
        name: 'Cuscino Memory Foam',
        description: 'Cuscino ergonomico per un sonno confortevole.',
        price: 29.99,
        imageUrl: 'https://media.istockphoto.com/id/2207660314/it/foto/cuscino-ortopedico-in-memory-foam-per-un-sonno-confortevole.webp?a=1&b=1&s=612x612&w=0&k=20&c=Jpynwqr3fngmOoCLYa9XcXUFtRH6FFK4_m8wj2RgFCg=',
        rating: 4.3,
        reviewCount: 50,
        inStock: true,
        category: 'casa'
      },

      // SPORT
      {
        id: '13',
        name: 'Tappetino Yoga Comfort',
        description: 'Tappetino antiscivolo per yoga e fitness.',
        price: 24.99,
        imageUrl: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFwcGV0aW5vJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.5,
        reviewCount: 80,
        inStock: true,
        category: 'sport'
      },
      {
        id: '14',
        name: 'Manubri Regolabili',
        description: 'Set di pesi regolabili per allenamento a casa.',
        price: 79.99,
        imageUrl: 'https://images.unsplash.com/photo-1703668984128-b506579acdd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnVicmklMjByZWdvbGFiaWxpJTIwZ3ltfGVufDB8fDB8fHww',
        rating: 4.6,
        reviewCount: 95,
        inStock: true,
        category: 'sport'
      },
      {
        id: '15',
        name: 'Bici da Città UrbanBike',
        description: 'Bicicletta comoda per spostamenti urbani.',
        price: 299.99,
        imageUrl: 'https://images.unsplash.com/photo-1627363707801-543bdb44faf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmljaSUyMHVyYmFufGVufDB8fDB8fHww',
        rating: 4.2,
        reviewCount: 40,
        inStock: false,
        category: 'sport'
      },
      {
        id: '16',
        name: 'Scarpe Running ProRun',
        description: 'Scarpe leggere per corsa e allenamento.',
        price: 89.99,
        imageUrl: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhcnBlJTIwcnVubmluZ3xlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.4,
        reviewCount: 120,
        inStock: true,
        category: 'sport'
      },

      // LIBRI
      {
        id: '17',
        name: 'Il Mistero della Notte',
        description: 'Romanzo thriller avvincente.',
        price: 12.99,
        imageUrl: 'https://images.unsplash.com/photo-1610703032634-182905cc3d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicm8lMjBpbCUyMG1pc3Rlcm9kJTIwZWxsYSUyMG5vdGV8ZW58MHx8MHx8fDA%3D',
        rating: 4.1,
        reviewCount: 30,
        inStock: true,
        category: 'libri'
      },
      {
        id: '18',
        name: 'Guida alla Programmazione',
        description: 'Manuale pratico per sviluppatori.',
        price: 29.99,
        imageUrl: 'https://images.unsplash.com/photo-1565229284535-2cbbe3049123?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpYnJvJTIwcHJvZ3JhbW1hemlvbmV8ZW58MHx8MHx8fDA%3D',
        rating: 4.7,
        reviewCount: 60,
        inStock: true,
        category: 'libri'
      },
      {
        id: '19',
        name: 'Cucina Italiana Tradizionale',
        description: 'Ricette autentiche della cucina italiana.',
        price: 19.99,
        imageUrl: 'https://images.unsplash.com/photo-1627907228175-2bf846a303b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicm8lMjBjdWNpbmF8ZW58MHx8MHx8fDA%3D',
        rating: 4.5,
        reviewCount: 45,
        inStock: true,
        category: 'libri'
      },
      {
        id: '20',
        name: 'Mindfulness Quotidiana',
        description: 'Libro per migliorare il benessere mentale.',
        price: 15.99,
        imageUrl: 'https://images.unsplash.com/photo-1760161627217-3f0124023664?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGlicm8lMjBtaW5kZnVsbG5lc3N8ZW58MHx8MHx8fDA%3D',
        rating: 4.3,
        reviewCount: 38,
        inStock: true,
        category: 'libri'
      },

      // BELLEZZA
      {
        id: '21',
        name: 'Crema Viso Idratante',
        description: 'Crema nutriente per tutti i tipi di pelle.',
        price: 22.99,
        imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JlYW0lMjB2aXNvfGVufDB8fDB8fHww',
        rating: 4.4,
        reviewCount: 70,
        inStock: true,
        category: 'bellezza'
      },
      {
        id: '22',
        name: 'Shampoo Nutriente',
        description: 'Shampoo delicato per capelli secchi.',
        price: 9.99,
        imageUrl: 'https://images.unsplash.com/photo-1701992678972-d5a053ad0fb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhbXBvb3xlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.2,
        reviewCount: 55,
        inStock: true,
        category: 'bellezza'
      },
      {
        id: '23',
        name: 'Profumo Elegance',
        description: 'Fragranza raffinata e duratura.',
        price: 59.99,
        imageUrl: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZnVtb3xlbnwwfHwwfHx8MA%3D%3D',
        rating: 4.6,
        reviewCount: 90,
        inStock: true,
        category: 'bellezza'
      },
      {
        id: '24',
        name: 'Set Trucco Completo',
        description: 'Kit makeup con tutto il necessario.',
        price: 39.99,
        imageUrl: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2V0JTIwdHJ1Y2NvfGVufDB8fDB8fHww',
        rating: 4.3,
        reviewCount: 65,
        inStock: false,
        category: 'bellezza'
      }
    ],
    categoria: 'tutti',
    listaDesideriItems: [],
    prodottiCarrello: [],
    user: undefined
  } as EcommerceState),
    
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
  })),
  
  // con withMethod creiamo dei metodi per aggiornare gli stati, in questo caso set categoria accoglie in input una categoria string
  // e la va a settare nello store aggiornando solamente lo stato categoria.
  // signalMethod restituisce un signal al posto di void, utile per operazioni asincrone con reattività.
  withMethods((store, toaster = inject(Toaster), matDialog = inject(MatDialog), router = inject(Router)) => ({
    setCategoria: signalMethod<string>((categoria: string) => {
      patchState(store, { categoria })
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
    }
  })
  )
)