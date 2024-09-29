import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emiter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emiter.component.html',
  styleUrl: './emiter.component.css'
})
export class EmiterComponent {
  myNumber:number=0;
  count:number=0; 
  onChangeNumber(){
    this.myNumber = Math.floor(Math.random() * 100);
    this.count = this.myNumber+1;
    console.log("Número aleatório(entre 0 e 100): ", this.myNumber);
    console.log("Número aleatório(acrescido de 1): ", this.count);
  }

}
