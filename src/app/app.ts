import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Persona } from './services/persona';
import { IPersona } from './models/persona';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('EjercicioClase');
  personaService = inject(Persona);
  personas: IPersona[] = [];

  constructor() {
    this.obtenerPersonas();
  }

  async agregarPersona() {
    await this.personaService.create({
      nombre: 'Juan Perez',
      edad: 30,
      email: 'juan.perez@example.com',
    });

    alert('Persona agregada');
  }

  obtenerPersonas() {
    this.personaService.get().subscribe((data) => {
      this.personas = data;
    });
  }
}
