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
