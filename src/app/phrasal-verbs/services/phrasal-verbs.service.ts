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
    return this.angularFirestore.collection('/PhrasalVerbs').doc(id).valueChanges()
  }

  getSuggestions(query: string) {
    this.angularFirestore.collection('/PhrasalVerbs', ref => ref.where('headword', '==', query));
  }



  deletePhrasalVerb(phrasalVerb: PhrasalVerb) {
    return this.angularFirestore.doc('/PhrasalVerbs' + phrasalVerb.id).delete();
  }

  /*  updatePhrasalVerb(phrasalVerb: PhrasalVerb) {
     return this.angularFirestore.doc('/PhrasalVerbs' + phrasalVerb.id).update;
   } */

}
