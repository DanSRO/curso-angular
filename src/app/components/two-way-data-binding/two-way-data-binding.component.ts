import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css'
})
export class TwoWayDataBindingComponent {
  data={
    name:'',
    age:'',
    sex:'',
  };
  details:string='';

  showDetails(){
    return this.details = `Nome: ${this.data.name} , idade: ${this.data.age} anos e sexo: ${this.data.sex}`;
  }
}
