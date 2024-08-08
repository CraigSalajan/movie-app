import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from "@angular/common/http";
import { apiInterceptor } from "./core/interceptors/api.interceptor";
import { refreshInterceptor } from "./core/interceptors/refresh.interceptor";
import { tokenInterceptor } from "./core/interceptors/token.interceptor";
import { graphqlProvider } from './graphql.provider';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(
      withFetch(),
      withInterceptors([
        apiInterceptor,
        tokenInterceptor,
        refreshInterceptor
      ])
    ),
    provideRouter(routes),
    provideClientHydration(), provideHttpClient(), graphqlProvider]
};
