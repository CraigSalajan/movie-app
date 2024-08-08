import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  background: InputSignal<string> = input("");
  title: InputSignal<string> = input("");
  description: InputSignal<string> = input("");
}
