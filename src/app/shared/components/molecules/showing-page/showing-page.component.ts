import { Component, inject } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';

@Component({
  selector: 'app-showing-page',
  standalone: true,
  imports: [],
  templateUrl: './showing-page.component.html',
  styleUrl: './showing-page.component.css'
})
export class ShowingPageComponent {
  movieService: MovieService = inject(MovieService);
}
