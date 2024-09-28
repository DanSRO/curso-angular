import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  size= 40;
  font='Arial';
  color= 'red';

  classes=['green-title', 'small-title'];
  underline='underline';

}
