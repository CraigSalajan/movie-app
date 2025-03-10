import { Injectable, signal } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

export interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  token = signal<string | null>(null);

  constructor(private http: HttpClient) { }

  refreshToken() {
    return this.http.get<TokenResponse>("/auth/token")
      .pipe(
        tap((response: TokenResponse) => {
          this.token.set(response.token);
        })
      )
  }
}
