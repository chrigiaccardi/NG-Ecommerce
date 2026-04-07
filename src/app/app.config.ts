import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHotToastConfig } from '@ngxpert/hot-toast';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // inseriamo withComponentInputBinding per collegare automaticamente la route all'input
    provideRouter(routes, withComponentInputBinding()),
    // configura tutti i toast globalmente con margin top, stacking depth (effetto 3D) e durata di 1 sec per UX veloce
    provideHotToastConfig({style: {marginTop: '70px'}, stacking: 'depth', duration: 1000}),
  ],
};
