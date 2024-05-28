import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '@core/services/auth.service';

/*
  Interceptor that adds the JWT token in the request when making a call to the backend API.
 */
export function authenticationInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const authToken: string = inject(AuthService).getAuthToken();

  const requestWithToken = req.clone({
    headers: req.headers.append('Authorization', 'Bearer ' + authToken),
  });

  return next(requestWithToken);
}
