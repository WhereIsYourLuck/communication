import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { AppConfigService } from '@core/config/app-config.service';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { authenticationInterceptor } from '@core/interceptors/auth.interceptor';
import { StorageService } from '@core/storage/storage.service';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

export function loadAppConfig(configService: AppConfigService) {
  return () => {
    return configService.load();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    StorageService,
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authenticationInterceptor]),
      withFetch(),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
    provideClientHydration(),
    provideAnimations(),
  ],
};
