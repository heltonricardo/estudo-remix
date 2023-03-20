import { ActionArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import { getStoredNotes, storeNotes } from "~/data/notes";
import Note from "../models/Note";

export default function Notes() {
  const notes = useLoaderData();
  return (
    <main>
      <NewNote />
      <NoteList notes={notes} />
    </main>
  );
}

export async function loader() {
  return await getStoredNotes();
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  // Use this to automatically get all the fields:
  // const note = Object.fromEntries(formData);
  // But we are using TS and the model, then:
  const note = new Note(formData);
  const existingNotes = await getStoredNotes();
  const updatedNotes = existingNotes.concat(note);
  await storeNotes(updatedNotes);
  return redirect("/notes");
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
