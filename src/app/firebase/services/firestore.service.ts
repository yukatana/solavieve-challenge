import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore,
  ) { }

  // reusable method that can add documents to different collections. the collection's name is the first parameter
  addDocumentToCollection(collection: string, document: object) {
    return this.firestore.collection(collection).add(document)
  }
}
