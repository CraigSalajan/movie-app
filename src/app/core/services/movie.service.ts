import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { GQLResponse, Pagination } from '../models/response.model';

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

  movies = signal<Movie[]>([]);
  pagination = signal<Pagination>({} as Pagination);

  private searchTerm= signal<string|null|undefined>("");
  private genre = signal<string|null|undefined>("");

  constructor(private http: HttpClient, private apollo: Apollo) { }

  async refreshMovies( searchTerm: string|null|undefined, genre: string|null|undefined, page: number = 1, limit: number = 25) {
    this.searchTerm.set(searchTerm);
    this.genre.set(genre);

    return this.getMoviesGQL(searchTerm, genre, page, limit);
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
}
