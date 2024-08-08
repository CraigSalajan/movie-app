import { Component, effect, inject, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ShowingPageComponent } from '../../shared/components/molecules/showing-page/showing-page.component';
import { FiltersComponent } from '../../shared/components/organisms/filters/filters.component';
import { PaginationComponent } from '../../shared/components/organisms/pagination/pagination.component';
import { MovieCardComponent } from '../../shared/components/molecules/movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaginationComponent,
    MovieCardComponent,
    FiltersComponent,
    ShowingPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  movieService: MovieService = inject(MovieService)

  constructor() {
    effect(() => {
      if (this.movieService.movies()) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    })
  }

 ngOnInit() {
   this.movieService.refreshMovies(null, null);
 }
}
