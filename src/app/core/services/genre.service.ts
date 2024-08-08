import { Injectable, signal } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { firstValueFrom } from 'rxjs';
import { GQLResponse } from '../models/response.model';

export interface Genre {
  title: string;
}

const GET_GENRES = gql`
query Genres {
  genres {
    nodes {
      title
    }
  }
}
`

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genres = signal<Genre[]>([]);

  constructor(private apollo: Apollo) {}

  async refreshGenres() {
    const response = await firstValueFrom(this.apollo.query<GQLResponse<"genres", Genre>>({
      query: GET_GENRES
    }));
    this.genres.set(response.data.genres.nodes)

    return response.data.genres.nodes;
  }
}
