import { Component } from '@angular/core';
import { Componente2 } from '../componente2/componente2';

@Component({
  selector: 'app-historia',
  imports: [Componente2],
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
})
export class Historia {
  titulo = 'Titulo de la Historia';
  valorNumero = 42;
  valorBoolean = true;
  valorObjeto = { clave: 'Valor de la clave', otraClave: 100, nested: { subClave: 'Subvalor' } };
  valorArreglo = [{ clave: 'valor1' }, { clave: 'valor2' }];

  obtenerMensaje(): string {
    return this.titulo;
  }

  cambiarMensaje(): void {
    this.titulo = 'Mensaje Cambiado';
  }

  onBlur(): void {
    alert('El botón ha perdido el foco');
  }

}
