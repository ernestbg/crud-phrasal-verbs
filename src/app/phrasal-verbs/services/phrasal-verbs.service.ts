import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map, take } from 'rxjs';
import { PhrasalVerb } from '../interfaces/phrasal-verb.interface';



@Injectable({
  providedIn: 'root'
})
export class PhrasalVerbsService {


  constructor(private angularFirestore: AngularFirestore) { }


  getAllPhrasalVerbs() {
    return this.angularFirestore.collection('/PhrasalVerbs', ref => ref.orderBy('headword')).snapshotChanges();
  }

  getTotalItems(): Observable<number> {
    return this.angularFirestore.collection('/PhrasalVerbs').get().pipe(
      map(collection => collection.size)
    );
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

  addDocumentIfNotDuplicate(form: any) {
    const headwordValueToCheck = form.value.headword;
    const definitionValueToCheck = form.value.definition;
    const formData = { ...form.value }; // Hacer una copia de los datos del formulario

    this.checkDuplicateData(headwordValueToCheck, definitionValueToCheck)
      .pipe(take(1))
      .subscribe(isDuplicate => {
        if (!isDuplicate) {
          this.angularFirestore.collection('/PhrasalVerbs').add(formData);
        } else {
          console.log('El documento ya existe, no se agregará un duplicado.');
        }
      });
  }

  checkDuplicateData(headwordValueToCheck: any, definitionValueToCheck: any) {
    return this.angularFirestore.collection('/PhrasalVerbs', ref =>
      ref.where('headword', '==', headwordValueToCheck)
        .where('definition', '==', definitionValueToCheck)
    )
      .valueChanges()
      .pipe(
        take(1),
        map(actions => actions.length > 0)
      );
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
