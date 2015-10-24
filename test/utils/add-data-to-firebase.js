export function addDataToFirebase(data, firebase, path) {
  const ref = path ? firebase.child(path) : firebase;
  let record;

  ref.on('child_added', snapshot => {
    record = snapshot.val();
    record.key = snapshot.key();
    ref.off();
  });

  ref.push(data);
  firebase.flush();

  return record;
}
