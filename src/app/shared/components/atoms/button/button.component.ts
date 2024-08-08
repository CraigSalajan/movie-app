import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

type Color = "orange" | "blue";
type Size = "sm" | "md" | "lg";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  color = input<Color>("blue");
  size = input<Size>("sm");
}
