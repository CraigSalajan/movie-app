import { HttpInterceptorFn } from '@angular/common/http';

export const apiUrl = "https://0kadddxyh3.execute-api.us-east-1.amazonaws.com";

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const apiRequest = req.clone({url: `${apiUrl}${req.url}`});
  return next(apiRequest);
};
