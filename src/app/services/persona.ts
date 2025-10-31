/* eslint-disable @typescript-eslint/no-explicit-any */
import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { IPersona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Persona {
  firestore = inject(Firestore);

  get() {
    const personasCollection = collection(this.firestore, 'personas');
    return collectionData(personasCollection, { idField: 'id' }) as Observable<IPersona[]>;
  }

  create(persona: IPersona) {
    const personasCollection = collection(this.firestore, 'personas');
    return addDoc(personasCollection, persona);
  }

  update(persona: IPersona) {
    const personasCollection = collection(this.firestore, 'personas');
    const personaDoc = doc(personasCollection, persona.id);
    return updateDoc(personaDoc, {
      ...persona,
    });
  }

  delete(id: string) {
    const personasCollection = collection(this.firestore, 'personas');
    const personaDoc = doc(personasCollection, id);
    return deleteDoc(personaDoc);
  }
}
