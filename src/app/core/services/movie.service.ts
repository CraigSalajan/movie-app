import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { GQLResponse, PaginatedRestResponse, Pagination } from '../models/response.model';

export interface Movie {
  id: string;
  title: string;
  summary: string;
  posterUrl: string;
  duration: string;
  rating: string;
}


const GET_MOVIES = gql`
query GetMovies($pagination: PaginationInput, $where: MovieFilterInput) {
  movies(pagination: $pagination, where: $where) {
    nodes {
      id,
      title,
      posterUrl,
      summary,
      duration,
      rating
    },
    pagination {
      page,
      perPage,
      totalPages
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: WritableSignal<Movie[]> = signal([]);
  pagination: WritableSignal<Pagination> = signal({} as Pagination);

  private searchTerm: WritableSignal<string|null|undefined> = signal("");
  private genre: WritableSignal<string|null|undefined> = signal("");

  constructor(private http: HttpClient, private apollo: Apollo) { }

  async refreshMovies( searchTerm: string|null|undefined, genre: string|null|undefined, page: number = 1, limit: number = 25) {
    this.searchTerm.set(searchTerm);
    this.genre.set(genre);
    return this.getMoviesGQL(searchTerm, genre, page, limit);
  }

  private async getMoviesRest(searchTerm: string|null|undefined, genre: string|null|undefined, page: number = 1, limit: number = 25) {
    let queryParams = `page=${page}&limit=${limit}`;
    if (searchTerm) {
      queryParams += `&search=${searchTerm}`
    }
    if (genre) {
      queryParams += `&genre=${genre}`
    }
    const response = await firstValueFrom(this.http.get<PaginatedRestResponse<Movie>>(`/movies?${queryParams}`));
    this.movies.set(response.data);
    this.pagination.set({
      page,
      perPage: limit,
      totalPages: response.totalPages,
    })
    return response.data;
  }

  private async getMoviesGQL(searchTerm: string|null|undefined, genre: string|null|undefined, page: number = 1, limit: number = 25) {
    const response = await firstValueFrom(this.apollo.query<GQLResponse<"movies", Movie>>({
      query: GET_MOVIES,
      variables: {
        pagination: {
          page,
          perPage: limit
        },
        where: {
          search: searchTerm,
          genre: genre
        }
      }
    }));

    this.movies.set(response.data.movies.nodes)
    this.pagination.set(response.data.movies.pagination);

    return response.data.movies;
  }

  gotoPage(page: number) {
    if (page > 0 && page <= this.pagination().totalPages) {
      this.refreshMovies(
        this.searchTerm(),
        this.genre(),
        page,
        this.pagination().perPage
      )
    }
  }

  nextPage() {
    this.gotoPage(this.pagination().page + 1);
  }

  previousPage() {
    this.gotoPage(this.pagination().page - 1);
  }
}
