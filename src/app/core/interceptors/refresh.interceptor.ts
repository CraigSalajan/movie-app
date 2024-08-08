import { HttpErrorResponse, HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from "rxjs";
import { TokenResponse, TokenService } from "../services/token.service";
import { inject } from "@angular/core";

export const refreshInterceptor: HttpInterceptorFn = (req, next): Observable<HttpEvent<any>> => {

  const tokenService: TokenService = inject(TokenService);

  return next(req)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          try {
            return tokenService.refreshToken()
              .pipe(
                switchMap((response: TokenResponse) => {
                  return next(req.clone({
                    headers: req.headers.set(
                      "Authorization", `Bearer ${response.token}`
                    )
                  }));
                })
              )
          } catch (e) {
            return throwError(() => err);
          }
        } else {
          return throwError(() => err);
        }
      }),
      switchMap((value: any) => {
        return of(value);
      })
    );
};
