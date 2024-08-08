import { Component, input, InputSignal } from '@angular/core';
import { Movie } from "../../../../core/services/movie.service";
import { CardComponent } from "../../atoms/card/card.component";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  movie: InputSignal<Movie | undefined> = input();
}
