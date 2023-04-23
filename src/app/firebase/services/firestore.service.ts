import { inject, Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable()
export class FirestoreService {

  constructor(
    private firestore: Firestore = inject(Firestore),
  ) { }

  // reusable method that can add documents to different collections. the collection's name is the first parameter
  addDocumentToCollection(collectionName: string, document: object) {
    const _collection = collection(this.firestore, collectionName)
    return addDoc(_collection, document)
  }
}
