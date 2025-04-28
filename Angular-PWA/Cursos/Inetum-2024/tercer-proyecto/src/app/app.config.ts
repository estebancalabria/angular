import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ContactoService } from './services/contacto.service';
import { ContactoServiceInterface } from './services/contacto.service.interface';
import { provideHttpClient } from '@angular/common/http';
import { ContactoServiceHttp } from './services/contacto.service.http';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: ContactoServiceInterface, useClass: ContactoServiceHttp },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};
