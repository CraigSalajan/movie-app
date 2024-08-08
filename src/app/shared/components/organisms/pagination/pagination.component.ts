import { Component, inject } from '@angular/core';
import { MovieService } from '../../../../core/services/movie.service';
import { PageNumberComponent } from "../../molecules/page-number/page-number.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { ShowingPageComponent } from '../../molecules/showing-page/showing-page.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    PageNumberComponent,
    ButtonComponent,
    ShowingPageComponent
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  movieService: MovieService = inject(MovieService);

  onClick(page: number) {
    this.movieService.gotoPage(page);
  }

}
