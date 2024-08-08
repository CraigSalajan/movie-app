import { NgOptimizedImage } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  background = input<string>("");
  title= input<string>("");
  description = input<string>("");
  subHeadingLeft = input<string>("");
  subHeadingRight = input<string>("");
}
