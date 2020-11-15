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
          console.log(doc.id, " => ", doc.data());
      });
    })

    return this.firestore.collection("miss").get();
  }

  createBet(data: any) {
    console.log(data)
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("missBets")
          .add(data)
          .then(res => {res}, err => reject(err));
  });
  }
}