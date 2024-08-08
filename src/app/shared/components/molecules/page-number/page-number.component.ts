import { Component, inject, input, output } from '@angular/core';
import { ButtonComponent } from "../../atoms/button/button.component";
import { MovieService } from "../../../../core/services/movie.service";

@Component({
  selector: 'app-page-number',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  templateUrl: './page-number.component.html',
  styleUrl: './page-number.component.css'
})
export class PageNumberComponent {

  active = input<boolean>(false);
  number = input<number>(0);

  onClick = output<number>();

  movieService: MovieService = inject(MovieService);

  handleClick() {
    this.onClick.emit(this.number());
  }

}
