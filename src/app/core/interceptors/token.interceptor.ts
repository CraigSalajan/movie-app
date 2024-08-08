import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token.service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService: TokenService = inject(TokenService);
  const token = tokenService.token();

  if (token) {
    const authRequest = req.clone({
      headers: req.headers
        .set("Authorization", `Bearer ${token}`)
    })

    return next(authRequest)
  }
  return next(req);
};
