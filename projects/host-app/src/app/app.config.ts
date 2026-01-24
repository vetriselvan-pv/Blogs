import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withDebugTracing, withHashLocation, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withDebugTracing(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
      withHashLocation()
    ),
  ],
};
