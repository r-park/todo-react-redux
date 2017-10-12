import { firebaseDb } from './firebase';


export class FirebaseList {
  constructor(actions, modelClass, path = null, query = null, orderBy = null) {
    this._actions = actions;
    this._modelClass = modelClass;
    this._path = path;
    this._query = query;
    this._orderBy = orderBy;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get query() {
    return this._query;
  }

  set orderBy(value) {
    this._orderBy = value;
  }

  get orderBy() {
    return this._orderBy;
  }

  set query(value) {
    this._query = value;
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
    if(this._query) {
      collection = collection.where(
        this._query[0],this._query[1],this._query[2]);
    }
    if(this._orderBy) {
      collection = collection.orderBy(this._orderBy.name,
        this._orderBy.direction);
    }
    let initialized = false;
    let list = [];
    
    let unsubscribe = collection.onSnapshot(snapshot => {
      if(!initialized) {
        emit(this._actions.onLoad(list));
        initialized = true;
      }
      const isLocalChange = snapshot.metadata.hasPendingWrites;
      snapshot.docChanges.forEach(change => {
          if (change.type === "added") {
            if (initialized) {
              emit(this._actions.onAdd(this.unwrapSnapshot(change.doc), isLocalChange));
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
    if(this._unsubscribe) {
      this._unsubscribe();
    }
  }

  unwrapSnapshot(snapshot) {
    let data = snapshot.data();
    data.id = snapshot.id;
    return new this._modelClass(data);
  }
}
