import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authenticationInterceptor } from '@core/interceptors/auth.interceptor';
import { AppConfigService } from '@core/config/app-config.service';

export function loadAppConfig(configService: AppConfigService) {
  return () => {
    return configService.load();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authenticationInterceptor])),
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      multi: true,
      deps: [AppConfigService],
    },
    provideClientHydration(),
    provideAnimations(),
  ],
};
