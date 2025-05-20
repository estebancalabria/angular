import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { LibroInterfaceService } from './services/libro-interface.service';
import { LibroHttpService } from './services/libro-http.service';
import { LibroMockService } from './services/libro-mock.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    { provide: LibroInterfaceService, useClass: LibroMockService} // Proporciona la interfaz de servicio de libro
  ]
};
