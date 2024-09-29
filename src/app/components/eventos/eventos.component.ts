import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show:boolean = false;

  showMessage(): void{
    // this.show=true;
    this.show = !this.show;  // toggle = mudar de estado. No exemplo, true para false ou o contrário.
  }

}
