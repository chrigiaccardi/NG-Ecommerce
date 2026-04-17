import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // inseriamo withComponentInputBinding per collegare automaticamente la route all'input.
    // withViewTransition è una API nativa di Angular che ci permette di impostare transizioni particolari ed interattive al progetto
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    // configura tutti i toast globalmente con margin top, stacking depth (effetto 3D) e durata di 1 sec per UX veloce
    provideHotToastConfig({ style: { marginTop: '70px' }, stacking: 'depth', duration: 1000 }),
    provideClientHydration(withEventReplay()),
  ],
};
