// Creiamo un'interface per le recensioni degli utenti su come devono essere sturtturate

export interface RecensioneUtente {
    id: string;
    idProdotto: string;
    nomeUtente: string;
    urlImgUtente: string;
    rating: number;
    titolo: string;
    commento: string;
    dataRecensione: Date;
}

// Pick estrae solo alcune proprietà specifiche da un typo già esistente.
// In questo caso titolo, commento e rating da recensione utente e creiamo una type apposita
// con i 3
export type AggiungiRecensioniParametri = Pick<RecensioneUtente, 'titolo' | 'commento' | 'rating'>;
