import { Component, inject, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
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

  active: InputSignal<boolean> = input(false);
  number: InputSignal<number> = input(0);

  onClick: OutputEmitterRef<number> = output();

  movieService: MovieService = inject(MovieService);

  handleClick() {
    this.onClick.emit(this.number());
  }

}
