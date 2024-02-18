import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { PhrasalVerb } from '../interfaces/phrasal-verb.interface';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhrasalVerbsService {

  constructor(private angularFirestore: AngularFirestore) { }

  /*   addPhrasalVerb(phrasalVerb: PhrasalVerb) {
      return this.angularFirestore.collection('/PhrasalVerbs').add(phrasalVerb);
    } */

  getAllPhrasalVerbs() {
    return this.angularFirestore.collection('/PhrasalVerbs').snapshotChanges();
  }
  getPhrasalVerbById(id: string): Observable<any> {
    return this.angularFirestore.collection('/PhrasalVerbs').doc(id).valueChanges();
  }

  getSuggestions(query: string): Observable<any[]> {
    return this.angularFirestore.collection('/PhrasalVerbs', ref => ref
      .where('headword', '>=', query)
      .where('headword', '<=', query + '\uf8ff'))
      .valueChanges();
  }

  savePhrasalVerb(form: any) {
    this.angularFirestore.collection('/PhrasalVerbs').add(form.value)
      .then(() => {
        form.resetForm();
      })
      .catch((error) => {
        console.error('Error al añadir documento: ', error);
      });
  }

  deletePhrasalVerb(phrasalVerbId: string ) {
    this.angularFirestore.collection('/PhrasalVerbs').doc(phrasalVerbId).delete()
      .then(() => {
        console.log('Documento eliminado correctamente');
      })
      .catch((error) => {
        console.error('Error al eliminar documento: ', error);
      });
  }


  /*  updatePhrasalVerb(phrasalVerb: PhrasalVerb) {
     return this.angularFirestore.doc('/PhrasalVerbs' + phrasalVerb.id).update;
   } */

}
