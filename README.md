# 🛒 NG-Ecomm

E-commerce sviluppato con **Angular 21** come esercitazione avanzata.

---

## 📋 Descrizione

**NG-Ecomm** è un'applicazione e-commerce che dimostra:
- Server-Side Rendering (SSR) e prerendering
- State management moderno con NgRx Signals
- SEO dinamico con meta tag
- Design responsive con Tailwind CSS

---

## 🛠 Tecnologie

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | Angular 21, TypeScript |
| **State** | NgRx Signals, Immer |
| **Rendering** | @angular/ssr, Prerendering |
| **Styling** | Tailwind CSS, Angular Material |
| **Notifiche** | Hot Toast |
| **Deploy** | Netlify (SSR) |

---

## 🚀 Quick Start

```bash
# Install
npm install

# Dev server
npm run serve

# Build SSR
npm run build:ssr

# Serve SSR locally
npm run serve:ssr
```

---

## 📁 Struttura

```bash
src/
├── app
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.css
│   ├── app.html
│   ├── app.routes.server.ts
│   ├── app.routes.ts
│   ├── app.spec.ts
│   ├── app.ts
│   ├── components
│   │   ├── azioni-header
│   │   ├── bottone-indietro
│   │   ├── bottone-toggle
│   │   ├── card-prodotto
│   │   ├── header
│   │   ├── selettore-quantita
│   │   ├── sign-in
│   │   ├── sign-up
│   │   ├── sommario-ordine
│   │   └── stelle-recensioni
│   ├── directives
│   ├── ecommerce-store.ts
│   ├── models
│   │   ├── opzioni-item.ts
│   │   ├── ordine.ts
│   │   ├── prodotti-carrello.ts
│   │   ├── prodotto.ts
│   │   ├── recensione-utente.ts
│   │   ├── seo-data.ts
│   │   └── user.ts
│   ├── pages
│   │   ├── carrello
│   │   │   └── lista-prodotti-carrello
│   │   ├── checkout
│   │   │   ├── form-pagamento
│   │   │   └── form-spedizione
│   │   ├── dettagli-prodotto
│   │   │   ├── info-prodotto
│   │   │   ├── recensione-singola
│   │   │   ├── scrivi-recensione
│   │   │   ├── sommario-rating
│   │   │   ├── stato-disponibilita-prodotto
│   │   │   └── vista-recensioni
│   │   ├── griglia-prodotti
│   │   ├── lista-desideri
│   │   │   ├── lista-desideri-vuota
│   │   ├── ordine-completato
│   │   └── pannello-prodotti-carrello
│   │       ├── pannello-lista-desideri-carrello
│   └── services
│       ├── categoria-api.ts
│       ├── seo-manager.ts
│       └── toaster.ts
├── index.html
├── main.server.ts
├── main.ts
├── material-theme.scss
├── server.ts
└── styles.css

---

## ✨ Features Principali

- ✅ Filtraggio prodotti per categoria
- ✅ Meta tag SEO dinamici
- ✅ Prerendering rotte statiche
- ✅ Responsive design
- ✅ Notifiche toast

---

## 🌐 Deploy

```bash
git push origin main
# → Netlify deploy automatico
```

**Live**: [https://ng-ecomm.netlify.app](https://ng-ecomm.netlify.app)

---

## 📚 Concetti Dimostrati

- Server-Side Rendering (SSR)
- Signals & Computed properties
- NgRx Signals (state management moderno)
- SEO dinamico
- Immutable state with Immer
- Responsive design

---

## 📝 License

Questo progetto è Open Source ed è sotto la copertura MIT

## 📩 Contatti

Christian Giaccardi - 📧 [chrigiaccardi@gmail.com](mailto:chrigiaccardi@gmail.com) <br>
GitHub - [chrigiaccardi](https://github.com/chrigiaccardi) <br>
LinkedIn - [LinkedIn](https://it.linkedin.com/in/christian-giaccardi-753085180?trk=public_profile_browsemap_profile-result-card_result-card_full-click)