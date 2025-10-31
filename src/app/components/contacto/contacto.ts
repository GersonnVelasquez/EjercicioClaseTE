import { Component } from '@angular/core';
import { Componente1 } from '../componente1/componente1';

@Component({
  selector: 'app-contacto',
  imports: [Componente1],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {}
