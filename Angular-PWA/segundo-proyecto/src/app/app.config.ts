import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ContactoService } from './services/contacto.service';
import { ContactoServiceInterface } from './services/contacto.service.interface';
import { provideHttpClient } from '@angular/common/http';
import { ContactoServiceHttp } from './services/contacto.service.http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide : ContactoServiceInterface, useClass : ContactoServiceHttp}
  ]
};
