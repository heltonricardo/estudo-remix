import Note from "~/models/Note";
import firebase from "../firebaseConfig";

export default class NotesCollection {
  static #converter = {
    toFirestore: (note: Note) => ({ title: note.title, content: note.content, date: note.date }),
    fromFirestore: (
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ) => {
      const data = snapshot.data(options);
      return new Note(snapshot.id, data.title, data.content, data.date);
    },
  };

  static #collection() {
    return firebase.firestore().collection("notes").withConverter(this.#converter);
  }

  static async storeNote(note: Note): Promise<Note> {
    const docRef = await this.#collection().add(note);
    const doc = await docRef.get();
    return doc.data() || new Note();
  }

  static async getStoredNotes(): Promise<Note[]> {
    const query = await this.#collection().orderBy("date", "desc").get();
    return query.docs.map((doc) => doc.data());
  }

  static async getStoredNoteById(id: string) {
    const docId = firebase.firestore.FieldPath.documentId();
    const query = await this.#collection().where(docId, "==", id).get();
    return query.docs[0].data();
  }
}
