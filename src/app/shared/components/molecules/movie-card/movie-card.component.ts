import { Component, input } from '@angular/core';
import { DurationPipe } from '../../../../core/pipes/duration.pipe';
import { Movie } from "../../../../core/services/movie.service";
import { CardComponent } from "../../atoms/card/card.component";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CardComponent,
    DurationPipe
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  movie = input<Movie>({} as Movie);
}
