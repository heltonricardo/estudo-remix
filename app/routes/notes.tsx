import { ActionArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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

  if (note.title.trim().length < 5) {
    return { message: "Invalid title: must be at least 5 characters long." };
  }

  const existingNotes = await getStoredNotes();
  const updatedNotes = existingNotes.concat(note);
  await storeNotes(updatedNotes);
  return redirect("/notes");
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <main className="error">
      <h1>An error related to your notes ocurred!</h1>
      <p>{error.message}</p>
      <p>
        Back to <Link to="/">safety</Link>!
      </p>
    </main>
  );
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
