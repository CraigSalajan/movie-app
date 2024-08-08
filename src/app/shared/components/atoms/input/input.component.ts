import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  inputId = input<string>("");
  label = input<string>("");
  type = input<string>("text");
  control = input<FormControl<any>>(new FormControl<any>(""));
  placeholder = input<string>("");
}
