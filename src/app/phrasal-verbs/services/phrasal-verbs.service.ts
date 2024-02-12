import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PhrasalVerb } from '../interfaces/phrasal-verb.interface';

@Injectable({
  providedIn: 'root'
})
export class PhrasalVerbsService {

  constructor(private angularFirestore: AngularFirestore) { }

  addPhrasalVerb(phrasalVerb: PhrasalVerb) {
    return this.angularFirestore.collection('/PhrasalVerbs').add(phrasalVerb);
  }

  getAllPhrasalVerbs() {
    return this.angularFirestore.collection('/PhrasalVerbs').snapshotChanges();
  }

  deletePhrasalVerb(phrasalVerb: PhrasalVerb) {
    return this.angularFirestore.doc('/PhrasalVerbs' + phrasalVerb.id).delete();
  }

 /*  updatePhrasalVerb(phrasalVerb: PhrasalVerb) {
    return this.angularFirestore.doc('/PhrasalVerbs' + phrasalVerb.id).update;
  } */
  
}
