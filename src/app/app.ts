import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Persona } from './services/persona';
import { IPersona } from './models/persona';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('EjercicioClase');
  personaService = inject(Persona);
  formBuilder = inject(FormBuilder);
  personas: IPersona[] = [];

  personaForm = this.formBuilder.group({
    nombre: ['', [Validators.required],[]],
    edad: [0, [Validators.required, Validators.min(12)]],
    email: ['', [Validators.required, Validators.email]],
    id: [null],
  });

  constructor() {
    this.obtenerPersonas();
  }

  async submitForm() {
    if (this.personaForm.invalid) {
      alert('Formulario inválido. Por favor, verifica los datos ingresados.');
      return;
    }

    const estaActualizando = this.personaForm.value.id;

    if (estaActualizando) {
      this.personaService.update({
        id: this.personaForm.value.id!,
        nombre: this.personaForm.value.nombre!,
        edad: this.personaForm.value.edad!,
        email: this.personaForm.value.email!,
      });
    } else {
      await this.personaService.create({
        nombre: this.personaForm.value.nombre!,
        edad: this.personaForm.value.edad!,
        email: this.personaForm.value.email!,
      });
    }

    this.personaForm.reset();
  }

  borrarPersona(id: string | undefined) {
    if (id) {
      this.personaService.delete(id);
    }
  }

  editarPersona(persona: IPersona) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.personaForm.patchValue(persona as any);
  }

  obtenerPersonas() {
    this.personaService.get().subscribe((data) => {
      this.personas = data;
    });
  }
}
