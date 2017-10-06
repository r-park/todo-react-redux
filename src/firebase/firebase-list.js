import { firebaseDb } from './firebase';


export class FirebaseList {
  constructor(actions, modelClass, path = null) {
    this._actions = actions;
    this._modelClass = modelClass;
    this._path = path;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  push(value) {
    return firebaseDb.collection(`${this._path}`).add(value);
  }

  remove(id) {
    return firebaseDb.collection(`${this._path}`).doc(id).delete();
  }

  set(id, value) {
    return firebaseDb.collection(`${this._path}`).doc(id).set(value);
  }

  update(id, value) {
    return firebaseDb.collection(`${this._path}`).doc(id).update(value);
  }

  subscribe(emit) {
    let collection = firebaseDb.collection(this._path);
    let initialized = false;
    let list = [];
    
    let unsubscribe = collection.onSnapshot(snapshot => {
      if(!initialized) {
        initialized = true;
      }
      snapshot.docChanges.forEach(change => {
          if (change.type === "added") {
            if (initialized) {
              emit(this._actions.onAdd(this.unwrapSnapshot(change.doc)));
            }
            else {
              list.push(this.unwrapSnapshot(change.doc));
            }
          }
          if (change.type === "modified") {
              emit(this._actions.onChange(this.unwrapSnapshot(change.doc)));
          }
          if (change.type === "removed") {
              emit(this._actions.onRemove(this.unwrapSnapshot(change.doc)));
          }
      });
    });

    this._unsubscribe = () => unsubscribe();
  }

  unsubscribe() {
    this._unsubscribe();
  }

  unwrapSnapshot(snapshot) {
    let data = snapshot.data();
    data.id = snapshot.id;
    return new this._modelClass(data);
  }
}
