import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // inseriamo withComponentInputBinding per collegare automaticamente la route all'input
    provideRouter(routes, withComponentInputBinding())
  ]
};
