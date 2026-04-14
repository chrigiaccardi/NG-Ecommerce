import { ProdottiCarrello } from "./prodotti-carrello";

// Creiamo una interface dell'ordine predefinito
export interface Ordine {
    id: string;
    userId: string;
    totale: number;
    prodottiOrdine: ProdottiCarrello[],
    statoPagamento: 'Successo' | 'Fallito';
}
