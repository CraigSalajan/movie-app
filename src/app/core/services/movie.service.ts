import {Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {PaginatedResponse} from "../models/response.model";

export interface Movie {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: WritableSignal<PaginatedResponse<Movie>> = signal({} as PaginatedResponse<Movie>);

  constructor(private http: HttpClient) { }

  async refreshMovies(page: number = 1, limit: number = 25, searchTerm: string) {
    let queryParams = `page=${page}&limit=${limit}`;
    if (searchTerm) {
      queryParams += `&search=${searchTerm}`
    }
    const response = await firstValueFrom(this.http.get<PaginatedResponse<Movie>>(`/movies/titles?${queryParams}`));
    this.movies.set(response);
    return response;
  }
}
