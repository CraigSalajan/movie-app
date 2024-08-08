import {Component, effect, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {MovieService} from "../../core/services/movie.service";
import {PaginationComponent} from "../../shared/components/organisms/pagination/pagination.component";
import {MovieCardComponent} from "../../shared/components/molecules/movie-card/movie-card.component";
import {sign} from "node:crypto";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaginationComponent,
    MovieCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movieService: MovieService = inject(MovieService)
  currentPage: WritableSignal<number> = signal(1);
  pageSize: WritableSignal<number> = signal(25);
  searchTerm: WritableSignal<string> = signal("");

  constructor() {
    effect(() => {
      this.movieService.refreshMovies(this.currentPage(), this.pageSize(), this.searchTerm())
    })
  }


  onPaginationChange(page: number) {
    if (page > 0 && page <= this.movieService.movies().totalPages) {
      this.currentPage.set(page);
    }
  }
}
