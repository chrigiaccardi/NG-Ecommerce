import { RecensioneUtente } from "./recensione-utente";

// creiamo una interface del prodotto così che per essere OK dal server bisogna ricevere tutte le seguenti caratteristiche di ogni singolo prodotto
export interface Prodotto {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    category: string;
    recensioni: RecensioneUtente[];
}


