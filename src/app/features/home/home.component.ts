import { Component, effect, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { MovieService } from "../../core/services/movie.service";
import { FiltersComponent } from '../../shared/components/organisms/filters/filters.component';
import { PaginationComponent } from "../../shared/components/organisms/pagination/pagination.component";
import { MovieCardComponent } from "../../shared/components/molecules/movie-card/movie-card.component";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PaginationComponent,
    MovieCardComponent,
    FiltersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  movieService: MovieService = inject(MovieService)

 ngOnInit() {
   this.movieService.refreshMovies(null, null);
 }
}
