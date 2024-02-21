import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PhrasalVerb } from '../interfaces/phrasal-verb.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhrasalVerbsService {

  constructor(private angularFirestore: AngularFirestore) { }


  getAllPhrasalVerbs() {
    return this.angularFirestore.collection('/PhrasalVerbs').snapshotChanges();
  }

  getPhrasalVerbById(id: string): Observable<any> {
    return this.angularFirestore.collection('/PhrasalVerbs').doc(id).valueChanges();
  }

  searchPhrasalVerbs(searchTerm: string): Observable<PhrasalVerb[]> {
    return this.angularFirestore.collection<PhrasalVerb>('/PhrasalVerbs', ref =>
      ref.where('headword', '>=', searchTerm)
        .where('headword', '<=', searchTerm + '\uf8ff')
        .orderBy('headword')
    ).valueChanges({ idField: 'id' });
  }


  savePhrasalVerb(form: any) {
    this.angularFirestore.collection('/PhrasalVerbs').add(form.value)
      .then(() => {
      })
      .catch((error) => {
        console.error('Error al añadir documento: ', error);
      });
  }

  deletePhrasalVerb(phrasalVerbId: string) {
    this.angularFirestore.collection('/PhrasalVerbs').doc(phrasalVerbId).delete()
      .then(() => {
        console.log('Documento eliminado correctamente');
      })
      .catch((error) => {
        console.error('Error al eliminar documento: ', error);
      });
  }

  updatePhrasalVerb(id: string, data: any) {
    this.angularFirestore.collection('/PhrasalVerbs').doc(id).update(data)
      .then(() => {
        console.log("Documento actualizado exitosamente!");
      })
      .catch(error => {
        console.error("Error al actualizar documento: ", error);
      });
  }
}
