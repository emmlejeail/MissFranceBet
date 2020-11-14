import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private firestore: AngularFirestore) { }

  getMisses() { 
    this.firestore.collection("miss").get().toPromise()
    .then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
      });
    })

    return this.firestore.collection("miss").get();
  }
}

class Miss {

  name: string;
  region: string;
  round1: boolean;
  round2: boolean;
  round3: number;

  constructor (name: string, region: string, round1: boolean, round2: boolean, round3: number ) {
      this.name = name;
      this.region = region;
      this.round1 = round1;
      this.round2 = round2;
      this.round3 = round3;

  }
  toString() {
      return this.name + ', ' + this.region;
  }
}