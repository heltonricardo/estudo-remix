import { ActionArgs, json, redirect } from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import NoteList, { links as noteListLinks } from "~/components/NoteList";
import NotesCollection from "~/data/firebase/collections/notesCollection";
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
  const notes = await NotesCollection.getStoredNotes();
  if (!notes?.length) {
    throw json({ message: "Could not find any notes!" }, { status: 404 });
  }
  return notes;
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  // Use this to automatically get all the fields:
  // const note = Object.fromEntries(formData);
  // But we are using TS and the model, then:
  const title = formData.get("title")?.toString() || "";
  const content = formData.get("content")?.toString() || "";
  const note = Note.newSimple(title, content);

  if (note.title.trim().length < 5) {
    return { message: "Invalid title: must be at least 5 characters long." };
  }

  await NotesCollection.storeNote(note);
  return redirect("/notes");
}

export function CatchBoundary() {
  const caughtResponse = useCatch();
  const message = caughtResponse.data?.message || "Data not found.";

  return (
    <main>
      <NewNote />
      <p className="info-message">{message}</p>
    </main>
  );
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

export function meta() {
  return {
    title: "All notes",
    description: "Manage your notes with ease",
  };
}

export function links() {
  return [...newNoteLinks(), ...noteListLinks()];
}
