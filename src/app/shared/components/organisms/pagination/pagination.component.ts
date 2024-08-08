import { Component, inject, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { PageNumberComponent } from "../../molecules/page-number/page-number.component";
import { ButtonComponent } from "../../atoms/button/button.component";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    PageNumberComponent,
    ButtonComponent
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  onPageChange: OutputEmitterRef<number> = output();

  movieService: MovieService = inject(MovieService);

  onClick(page: number) {
    this.movieService.gotoPage(page);
  }

}
