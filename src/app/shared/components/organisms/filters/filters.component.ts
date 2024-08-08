import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GenreService } from '../../../../core/services/genre.service';
import { MovieService } from '../../../../core/services/movie.service';
import { ButtonComponent } from '../../atoms/button/button.component';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ButtonComponent
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {

  fb: FormBuilder = inject(FormBuilder);
  movieService: MovieService = inject(MovieService);
  genreService: GenreService = inject(GenreService);

  filters = this.fb.group({
    searchTerm: [''],
    genre: ['']
  })

  ngOnInit() {
    this.genreService.refreshGenres();
  }

  onSubmit() {
    this.movieService.refreshMovies(
      this.filters.get('searchTerm')?.value,
      this.filters.get('genre')?.value,
    )
  }

}
