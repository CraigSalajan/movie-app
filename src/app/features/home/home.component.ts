import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {MovieService} from "../../core/services/movie.service";
import {PaginationComponent} from "../../shared/components/organisms/pagination/pagination.component";
import {MovieCardComponent} from "../../shared/components/molecules/movie-card/movie-card.component";

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
export class HomeComponent implements OnInit {

  movieService: MovieService = inject(MovieService)
  currentPage: WritableSignal<number> = signal(1);


  ngOnInit() {
    this.movieService.refreshMovies();
  }

  onPaginationChange(page: number) {
    if (page > 0 && page <= this.movieService.movies().totalPages) {
      this.currentPage.set(page);
      this.movieService.refreshMovies(page)
    }
  }
}
