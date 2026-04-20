// creiamo un'interface per i dati SEO
export interface SeoData {
    titolo: string;
    descrizione: string;
    image?: string;
    tipo?: 'website' | 'prodotto';
}
