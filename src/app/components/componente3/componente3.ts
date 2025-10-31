import { Component } from '@angular/core';
import { Componente2 } from '../componente2/componente2';

@Component({
  selector: 'app-componente3',
  imports: [Componente2],
  templateUrl: './componente3.html',
  styleUrl: './componente3.scss'
})
export class Componente3 {

}
