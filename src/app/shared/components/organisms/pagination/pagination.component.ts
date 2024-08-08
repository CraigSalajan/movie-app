import {Component, input, InputSignal, output, OutputEmitterRef} from '@angular/core';
import {PageNumberComponent} from "../../molecules/page-number/page-number.component";
import {ButtonComponent} from "../../atoms/button/button.component";

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

  totalPages: InputSignal<number> = input(0);
  currentPage: InputSignal<number> = input(0);

  pageSize: InputSignal<number> = input(0);

  onPageChange: OutputEmitterRef<number> = output();

  onClick(page: number) {
    this.onPageChange.emit(page);
  }

}
